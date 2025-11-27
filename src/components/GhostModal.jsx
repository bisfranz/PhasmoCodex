import { useEffect, useState, useRef } from 'react';
import dotsImg from '../img/dots.png';
import emf5Img from '../img/emf5.png';
import orbsImg from '../img/orbs.png';
import spiritboxImg from '../img/spiritbox.png';
import ultravioletImg from '../img/ultraviolet.png';
import freezingImg from '../img/temps.png';
import writingImg from '../img/writing.png';
import descriptionImg from '../img/description.png';
import descriptiondetailedImg from '../img/description-detailed.png';
import evidenceImg from '../img/evidence.png';
import resumeImg from '../img/resume.png';

const evidenceIcons = {
    "Proyector D.O.T.S": dotsImg,
    "Medidor EMF 5": emf5Img,
    "Ultravioleta": ultravioletImg,
    "Temperaturas heladas": freezingImg,
    "Orbes espectrales": orbsImg,
    "Escritura fantasma": writingImg,
    "Caja espectral": spiritboxImg
};

function GhostModal({ ghost, onClose }) {
    const [activeSection, setActiveSection] = useState('description');
    const descriptionRef = useRef(null);
    const evidencesRef = useRef(null);
    const infoRef = useRef(null);
    const tldrRef = useRef(null);
    const modalBodyRef = useRef(null);

    useEffect(() => {
        if (ghost) {
            const scrollY = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';

            return () => {

                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [ghost]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.classList.contains('modal')) {
                onClose();
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (ghost) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
            setActiveSection('description');
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [ghost, onClose]);

    const scrollToSection = (sectionId) => {
        const refs = {
            'description': descriptionRef,
            'evidences': evidencesRef,
            'info': infoRef,
            'tldr': tldrRef
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

    useEffect(() => {
        const handleScroll = (e) => {
            e.stopPropagation();

            if (!modalBodyRef.current) return;

            const scrollTop = modalBodyRef.current.scrollTop;
            const containerHeight = modalBodyRef.current.clientHeight;
            const scrollHeight = modalBodyRef.current.scrollHeight;

            if (scrollTop + containerHeight >= scrollHeight - 50) {
                setActiveSection('tldr');
                return;
            }

            const refs = [
                { id: 'description', ref: descriptionRef },
                { id: 'evidences', ref: evidencesRef },
                { id: 'info', ref: infoRef },
                { id: 'tldr', ref: tldrRef }
            ];

            let activeId = 'description';
            let maxVisibility = 0;

            refs.forEach(({ id, ref }) => {
                if (!ref.current) return;

                const element = ref.current;
                const elementTop = element.offsetTop;
                const elementBottom = elementTop + element.offsetHeight;
                const viewportTop = scrollTop;
                const viewportBottom = scrollTop + containerHeight;

                const visibleTop = Math.max(elementTop, viewportTop);
                const visibleBottom = Math.min(elementBottom, viewportBottom);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                const visibility = visibleHeight / element.offsetHeight;

                if (visibility > maxVisibility) {
                    maxVisibility = visibility;
                    activeId = id;
                }
            });

            setActiveSection(activeId);
        };

        const handleWheel = (e) => {
            if (!modalBodyRef.current) return;

            const { scrollTop, scrollHeight, clientHeight } = modalBodyRef.current;
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

            if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
                e.preventDefault();
            }
        };

        const modalBody = modalBodyRef.current;
        if (modalBody && ghost) {
            modalBody.addEventListener('scroll', handleScroll, { passive: false });
            modalBody.addEventListener('wheel', handleWheel, { passive: false });

            return () => {
                modalBody.removeEventListener('scroll', handleScroll);
                modalBody.removeEventListener('wheel', handleWheel);
            };
        }
    }, [ghost]);

    if (!ghost) return null;

    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>

                <div className="modal-header">
                    <div className="modal-ghost-icon">
                        <img src={ghost.image} alt={ghost.name} />
                    </div>
                    <h2>{ghost.name}</h2>
                </div>

                <div className="modal-main">
                    <div className="modal-nav">
                        <button
                            className={`nav-button ${activeSection === 'description' ? 'active' : ''}`}
                            onClick={() => scrollToSection('description')}
                            title="Descripción"
                        >
                            <img src={descriptionImg} alt="Descripción" className="nav-icon" />
                        </button>
                        <button
                            className={`nav-button ${activeSection === 'evidences' ? 'active' : ''}`}
                            onClick={() => scrollToSection('evidences')}
                            title="Evidencias"
                        >
                            <img src={evidenceImg} alt="Evidencias" className="nav-icon" />
                        </button>
                        <button
                            className={`nav-button ${activeSection === 'info' ? 'active' : ''}`}
                            onClick={() => scrollToSection('info')}
                            title="Información Detallada"
                        >
                            <img src={descriptiondetailedImg} alt="Información" className="nav-icon" />
                        </button>
                        <button
                            className={`nav-button ${activeSection === 'tldr' ? 'active' : ''}`}
                            onClick={() => scrollToSection('tldr')}
                            title="Resumen"
                        >
                            <img src={resumeImg} alt="Resumen" className="nav-icon" />
                        </button>
                    </div>

                    <div className="modal-body" ref={modalBodyRef}>
                        <div className="modal-section" ref={descriptionRef}>
                            <h3>
                                <img src={descriptionImg} alt="Descripción" className="section-icon" />
                                Descripción
                            </h3>
                            <p>{ghost.description}</p>
                        </div>

                        <div className="modal-section" ref={evidencesRef}>
                            <h3>
                                <img src={evidenceImg} alt="Evidencias" className="section-icon" />
                                Evidencias
                            </h3>
                            <div className="modal-evidences">
                                {ghost.evidences.map((evidence, index) => (
                                    <div key={index} className="modal-evidence-item">
                                        <img
                                            src={evidenceIcons[evidence]}
                                            alt={evidence}
                                            className="evidence-icon-modal"
                                        />
                                        {evidence}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section" ref={infoRef}>
                            <h3>
                                <img src={descriptiondetailedImg} alt="Información" className="section-icon" />
                                Información Detallada
                            </h3>
                            <div className="modal-info" dangerouslySetInnerHTML={{ __html: ghost.info }}></div>
                        </div>

                        <div className="modal-section" ref={tldrRef}>
                            <h3>
                                <img src={resumeImg} alt="Resumen" className="section-icon" />
                                Resumen
                            </h3>
                            <div className="modal-summary">
                                <div dangerouslySetInnerHTML={{ __html: ghost.tldr }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GhostModal;