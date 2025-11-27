import React, { useState, useEffect, useRef } from 'react';

import descriptionImg from '../img/description.png';
import statsImg from '../img/stats.png';
import extraImg from '../img/resume.png';

const STAT_FIELDS = [
    { key: "uses", label: "Usos" },
    { key: "precision", label: "Precisión" },
    { key: "calidadAudio", label: "Calidad de audio" },
    { key: "tasaRespuesta", label: "Tasa de respuesta" },
    { key: "rango", label: "Rango" },
    { key: "foco", label: "Foco" },
    { key: "duracion", label: "Duración" },
    { key: "tiempoRecargaUV", label: "Tiempo de recarga UV" },
    { key: "calidadImagen", label: "Calidad de imagen" },
    { key: "interferenciaParanormal", label: "Interferencia paranormal" },
    { key: "intensidad", label: "Intensidad" },
    { key: "formaSensor", label: "Forma del sensor" },
    { key: "estabilidad", label: "Estabilidad" },
    { key: "tasaInteraccion", label: "Tasa de interacción" },
    { key: "tasaRefresco", label: "Tasa de refresco" },
    { key: "resistenciaParanormal", label: "Resistencia paranormal" },
    { key: "reduccionCordura", label: "Reducción de cordura" },
    { key: "tiempoEntreCapturas", label: "Tiempo entre capturas" },
    { key: "velocidadRecuperacionCordura", label: "Velocidad de recuperación de cordura" },
    { key: "extras", label: "Extra" },
    { key: "type", label: "Tipo" }
];


function InventoryGridItem({ item, hovered, setHovered, setSelectedItem }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div
            className={`inventory-modal-grid-item${hovered === item.id ? ' inventory-modal-grid-item-hover' : ''}`}
            onClick={() => setSelectedItem(item)}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            title={item.name}
        >
            {!imgLoaded && (
                <div className="inventory-modal-img-placeholder" />
            )}
            <img
                src={item.icon}
                alt={item.name}
                className="inventory-modal-item-img"
                style={{ display: imgLoaded ? 'block' : 'none' }}
                onLoad={() => setImgLoaded(true)}
            />
            <span className="inventory-modal-item-name">{item.name}</span>
        </div>
    );
}

function InventoryModal({ open, items, onClose }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [hovered, setHovered] = useState(null);
    const [selectedTier, setSelectedTier] = useState(1);

    const [activeSection, setActiveSection] = useState('description');
    const descriptionRef = useRef(null);
    const statsRef = useRef(null);
    const extraRef = useRef(null);
    const modalBodyRef = useRef(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        if (open) {
            document.body.classList.add('inv-modal-open');
        } else {
            document.body.classList.remove('inv-modal-open');
        }
        return () => {
            document.body.classList.remove('inv-modal-open');
        };
    }, [open]);

    useEffect(() => {
        setActiveSection('description');
        setSelectedTier(1);
    }, [selectedItem]);

    useEffect(() => {
        if (searchTerm.trim().length > 0) {
            setFilteredItems(
                items.filter(item =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFilteredItems(items);
        }
    }, [searchTerm, items]);

    const scrollToSection = (sectionId) => {
        const refs = {
            'description': descriptionRef,
            'stats': statsRef,
            'extra': extraRef
        };
        const targetRef = refs[sectionId];
        if (targetRef.current && modalBodyRef.current) {
            const targetOffsetTop = targetRef.current.offsetTop;
            modalBodyRef.current.scrollTo({
                top: targetOffsetTop - 20,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    if (!open) return null;

    if (selectedItem) {
        const tierData = selectedItem.tiers?.[selectedTier] || {};
        return (
            <div className="item-modal-overlay" onClick={() => {
                setSelectedItem(null);
                setHovered(null);
            }}>
                <div className="item-modal-content" onClick={e => e.stopPropagation()}>
                    <span className="item-modal-close" onClick={() => {
                        setSelectedItem(null);
                        setHovered(null);
                    }}>&times;</span>
                    <div className="item-modal-header">
                        <div className="item-modal-icon-container">
                            <img src={tierData.icon} alt={selectedItem.name} className="item-modal-icon" />
                        </div>
                        <div>
                            <h2 className="item-modal-title">{selectedItem.name}</h2>
                            <div className="item-modal-tier-selector">
                                {[1, 2, 3].map(tier => (
                                    <button
                                        key={tier}
                                        className={`item-modal-tier-btn${selectedTier === tier ? ' active' : ''}`}
                                        onClick={() => setSelectedTier(tier)}
                                    >
                                        {['TIER I', 'TIER II', 'TIER III'][tier - 1]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="item-modal-main">
                        <div className="item-modal-nav">
                            <button
                                className={`item-nav-button${activeSection === 'description' ? ' active' : ''}`}
                                onClick={() => scrollToSection('description')}
                                title="Descripción"
                            >
                                <img src={descriptionImg} alt="Descripción" className="item-nav-icon" />
                            </button>
                            <button
                                className={`item-nav-button${activeSection === 'extra' ? ' active' : ''}`}
                                onClick={() => scrollToSection('extra')}
                                title="Detalles extra"
                            >
                                <img src={extraImg} alt="Extra" className="item-nav-icon" />
                            </button>
                            <button
                                className={`item-nav-button${activeSection === 'stats' ? ' active' : ''}`}
                                onClick={() => scrollToSection('stats')}
                                title="Estadísticas"
                            >
                                <img src={statsImg} alt="Estadísticas" className="item-nav-icon" />
                            </button>
                        </div>
                        <div className="item-modal-body" ref={modalBodyRef}>
                            <div className="item-modal-section" ref={descriptionRef}>
                                <h3>
                                    <img src={descriptionImg} alt="Descripción" className="item-section-icon" />
                                    Descripción
                                </h3>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: tierData.description || "Sin descripción disponible."
                                    }}
                                />
                            </div>
                            <div className="item-modal-section" ref={extraRef}>
                                <h3>
                                    <img src={extraImg} alt="Extra" className="item-section-icon" />
                                    Detalles
                                </h3>
                                <div className="item-modal-summary">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: tierData.extra || "Sin detalles extra."
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="item-modal-section" ref={statsRef}>
                                <h3>
                                    <img src={statsImg} alt="Estadísticas" className="item-section-icon" />
                                    Estadísticas
                                </h3>
                                <div className="item-modal-stats-cards">
                                    {STAT_FIELDS.map(stat => {
                                        const value = tierData[stat.key];
                                        if (stat.key === "extras" && Array.isArray(value)) {
                                            return value.map((extra, idx) => (
                                                <div className="item-modal-stat-card" key={stat.key + idx}>
                                                    <span className="item-modal-stat-label">{stat.label}</span>
                                                    <span className="item-modal-stat-value">{extra}</span>
                                                </div>
                                            ));
                                        }
                                        return value !== undefined && value !== "" ? (
                                            <div className="item-modal-stat-card" key={stat.key}>
                                                <span className="item-modal-stat-label">{stat.label}</span>
                                                <span className="item-modal-stat-value">{value}</span>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="inventory-modal-overlay" onClick={onClose}>
                <div className="inventory-modal" onClick={e => e.stopPropagation()}>
                    <div className="inventory-modal-header">
                        <h2 className="inventory-modal-title">Equipamiento</h2>
                        <span className="inventory-modal-close-btn" onClick={onClose} aria-label="Cerrar">&times;</span>
                    </div>
                    <div style={{ padding: '0 40px 10px 40px', marginTop: '18px' }}>
                        <input
                            type="text"
                            placeholder="Buscar objeto..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="search-input"
                            style={{
                                width: '100%',
                                marginBottom: '20px',
                                fontFamily: 'monospace',
                                fontSize: '1.1em',
                                padding: '10px 16px',
                                borderRadius: '8px',
                                border: '2px solid #00ff00',
                                background: 'rgba(0,40,0,0.7)',
                                color: '#00ff00',
                                outline: 'none',
                                boxShadow: '0 2px 12px #00ff0030'
                            }}
                        />
                    </div>
                    <div className="inventory-modal-body inventory-modal-grid">
                        {filteredItems.length > 0 ? (
                            filteredItems.map(item => (
                                <InventoryGridItem
                                    key={item.id}
                                    item={item}
                                    hovered={hovered}
                                    setHovered={setHovered}
                                    setSelectedItem={setSelectedItem}
                                />
                            ))
                        ) : (
                            <div style={{
                                gridColumn: '1/-1',
                                textAlign: 'center',
                                color: '#00ff00',
                                fontFamily: 'monospace',
                                fontSize: '1.2em',
                                padding: '40px 0'
                            }}>
                                No se encontraron objetos
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default InventoryModal;