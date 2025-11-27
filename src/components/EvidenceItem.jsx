function EvidenceItem({ evidence, state, onEvidenceClick }) {
    const getClassName = () => {
        let className = 'evidence-item';
        if (state === true) className += ' selected';
        if (state === false) className += ' eliminated';
        return className;
    };

    const handleButtonClick = (action, e) => {
        e.preventDefault();
        e.stopPropagation();
        onEvidenceClick(evidence.name, action);
    };

    return (
        <div className={getClassName()} data-evidence={evidence.name}>
            <div className="evidence-buttons">
                <button
                    className="btn-yes"
                    onClick={(e) => handleButtonClick('yes', e)}
                >
                    ✓
                </button>
                <button
                    className="btn-no"
                    onClick={(e) => handleButtonClick('no', e)}
                >
                    ✗
                </button>
            </div>
            <div className="evidence-icon">
                <img
                    src={evidence.icon}
                    alt={evidence.name}
                    className="evidence-image"
                />
            </div>
            <div className="evidence-number">{evidence.number}</div>
            <div className="evidence-name">{evidence.shortName}</div>
        </div>
    );
}

export default EvidenceItem;