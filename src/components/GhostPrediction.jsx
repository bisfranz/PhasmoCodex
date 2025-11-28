import dotsImg from '../img/dots.png';
import emf5Img from '../img/emf5.png';
import orbsImg from '../img/orbs.png';
import spiritboxImg from '../img/spiritbox.png';
import ultravioletImg from '../img/ultraviolet.png';
import freezingImg from '../img/temps.png';
import writingImg from '../img/writing.png';
import descriptionImg from '../img/description.png';
import descriptiondetailedImg from '../img/description-detailed.png';
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

const getGhostDifficulty = (ghostName) => {
    const easyGhosts = [
        'Espectro', 'Ente', 'Poltergeist',
        'Sombra', 'Demonio', 'Oni', 'Myling',
        'Obake', 'Deogen'
    ];

    const hardGhosts = ['Yurei'];

    const mediumGhosts = [
        'Banshee', 'Jinn', 'Pesadilla', 'Yokai', 'Goryo', 'Onryo',
        'Gemelos', 'Moroi', 'Thaye', 'Mímico', 'Espíritu', 'Revenant', 'Hantu', 'Raiju'
    ];

    if (easyGhosts.includes(ghostName)) return 'Fácil';
    if (hardGhosts.includes(ghostName)) return 'Difícil';
    if (mediumGhosts.includes(ghostName)) return 'Medio';
    return 'Medio';
};

const getDangerLevel = (ghostName) => {
    const highDanger = ['Revenant', 'Demonio', 'Raiju', 'Jinn', 'Moroi'];

    const lowDanger = [
        'Espíritu', 'Ente', 'Poltergeist', 'Sombra', 'Yurei',
        'Oni', 'Goryo', 'Myling', 'Onryo', 'Obake'
    ];

    const mediumDanger = [
        'Espectro', 'Banshee', 'Pesadilla', 'Yokai', 'Hantu',
        'Gemelos', 'Mímico', 'Deogen', 'Thaye'
    ];

    if (highDanger.includes(ghostName)) return 'Alto';
    if (lowDanger.includes(ghostName)) return 'Bajo';
    if (mediumDanger.includes(ghostName)) return 'Medio';
    return 'Medio';
};

function GhostPrediction({ possibleGhosts, onGhostSelect }) {
    if (possibleGhosts.length === 0) {
        return (
            <div className="ghost-prediction">
                <h3>Selecciona evidencias para identificar el fantasma</h3>
            </div>
        );
    }

    if (possibleGhosts.length === 1) {
        const ghost = possibleGhosts[0];
        return (
            <div className="ghost-prediction">
                <h3>¡Fantasma Identificado!</h3>
                <div className="ghost-results">
                    <div className="ghost-result" onClick={() => onGhostSelect(ghost)}>
                        <div className="ghost-header">
                            <div className="ghost-title-section">
                                <div className="ghost-icon-container">
                                    <img
                                        src={ghost.image}
                                        alt={ghost.name}
                                        className="ghost-icon"
                                    />
                                </div>
                                <div className="ghost-title">
                                    <h4>{ghost.name}</h4>
                                </div>
                            </div>
                            <div className="ghost-evidences">
                                {ghost.evidences.map((evidence, index) => (
                                    <div key={index} className="ghost-evidence-item">
                                        <img
                                            src={evidenceIcons[evidence]}
                                            alt={evidence}
                                            className="evidence-mini-icon"
                                        />
                                        <span>{evidence}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ghost-content">
                            <div className="ghost-details">
                                <div className="ghost-detail">
                                    <span className="ghost-detail-label">
                                        <img src={descriptionImg} alt="Descripción" className="section-icon-card" />
                                        Descripción
                                    </span>
                                    <span className="ghost-detail-text">{ghost.description}</span>
                                </div>
                                <div className="ghost-detail">
                                    <span className="ghost-detail-label">
                                        <img src={descriptiondetailedImg} alt="Información" className="section-icon-card" />
                                        Información Detallada
                                    </span>
                                    <span
                                        className="ghost-detail-text"
                                        dangerouslySetInnerHTML={{ __html: ghost.info }}
                                    ></span>
                                </div>
                                <div className="ghost-detail">
                                    <span className="ghost-detail-label">
                                        <img src={resumeImg} alt="Resumen" className="section-icon-card" />
                                        Resumen
                                    </span>
                                    <span
                                        className="ghost-detail-text"
                                        dangerouslySetInnerHTML={{ __html: ghost.tldr }}
                                    ></span>
                                </div>
                            </div>
                            <div className="ghost-stats">
                                <div className="ghost-danger-level">
                                    Peligro: {getDangerLevel(ghost.name)}
                                </div>
                                <div className="ghost-difficulty">
                                    Dificultad: {getGhostDifficulty(ghost.name)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="ghost-prediction">
            <h3>Posibles Fantasmas ({possibleGhosts.length}):</h3>
            <div className="ghost-results">
                {possibleGhosts.map((ghost) => (
                    <div
                        key={ghost.key}
                        className="ghost-result"
                        onClick={() => onGhostSelect(ghost)}
                    >
                        <div className="ghost-header">
                            <div className="ghost-title-section">
                                <div className="ghost-icon-container">
                                    <img
                                        src={ghost.image}
                                        alt={ghost.name}
                                        className="ghost-icon"
                                    />
                                </div>
                                <div className="ghost-title">
                                    <h4>{ghost.name}</h4>
                                </div>
                            </div>
                            <div className="ghost-evidences">
                                {ghost.evidences.map((evidence, index) => (
                                    <div key={index} className="ghost-evidence-item">
                                        <img
                                            src={evidenceIcons[evidence]}
                                            alt={evidence}
                                            className="evidence-mini-icon"
                                        />
                                        <span>{evidence}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ghost-content">
                            <div className="ghost-details">
                                <div className="ghost-detail">
                                    <span className="ghost-detail-label">
                                        <img src={descriptionImg} alt="Descripción" className="section-icon-card" />
                                        Descripción
                                    </span>
                                    <span className="ghost-detail-text">{ghost.description}</span>
                                </div>
                                <div className="ghost-detail">
                                    <span className="ghost-detail-label">
                                        <img src={descriptiondetailedImg} alt="Información" className="section-icon-card" />
                                        Información Detallada
                                    </span>
                                    <span
                                        className="ghost-detail-text"
                                        dangerouslySetInnerHTML={{ __html: ghost.info }}
                                    ></span>
                                </div>
                                <div className="ghost-detail">
                                    <span className="ghost-detail-label">
                                        <img src={resumeImg} alt="Resumen" className="section-icon-card" />
                                        Resumen
                                    </span>
                                    <span
                                        className="ghost-detail-text"
                                        dangerouslySetInnerHTML={{ __html: ghost.tldr }}
                                    ></span>
                                </div>
                            </div>
                            <div className="ghost-stats">
                                <div className="ghost-danger-level">
                                    Peligro: {getDangerLevel(ghost.name)}
                                </div>
                                <div className="ghost-difficulty">
                                    Dificultad: {getGhostDifficulty(ghost.name)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GhostPrediction;