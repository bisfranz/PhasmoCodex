import { useState, useEffect } from 'react';

function GhostSearch({ ghostData, onGhostSelect, onBackpackClick }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = (term) => {
        setSearchTerm(term);

        if (term.length > 0) {
            const filtered = Object.entries(ghostData).filter(([key, ghost]) =>
                ghost.name.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(filtered);
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    };

    const selectGhost = (ghostKey, ghost) => {
        onGhostSelect(ghost);
        setSearchTerm('');
        setShowResults(false);
    };

    useEffect(() => {
        const evidenceRow = document.querySelector('.evidence-row');
        if (evidenceRow) {
            if (showResults && searchResults.length > 0) {
                const itemHeight = 50;
                const baseMargin = 30;
                const searchBoxHeight = 30;
                const borderHeight = 4;
                const dynamicMargin = baseMargin + searchBoxHeight + borderHeight + (searchResults.length * itemHeight);

                evidenceRow.style.marginTop = `${Math.min(dynamicMargin, 300)}px`;
                evidenceRow.style.transition = 'margin-top 0.3s ease';
            } else if (showResults && searchResults.length === 0 && searchTerm.length > 0) {
                const noResultsHeight = 50;
                const baseMargin = 30;
                const searchBoxHeight = 50;
                const borderHeight = 4;
                const dynamicMargin = baseMargin + searchBoxHeight + borderHeight + noResultsHeight;

                evidenceRow.style.marginTop = `${dynamicMargin}px`;
                evidenceRow.style.transition = 'margin-top 0.3s ease';
            } else {
                evidenceRow.style.marginTop = '30px';
                evidenceRow.style.transition = 'margin-top 0.3s ease';
            }
        }
    }, [showResults, searchResults.length, searchTerm.length]);

    return (
        <div className="ghost-search" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, position: 'relative' }}>
                <input
                    type="text"
                    placeholder="Buscar fantasma..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="search-input"
                    style={{ width: '100%' }}
                />
                {showResults && searchResults.length > 0 && (
                    <div className="search-results" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 10 }}>
                        {searchResults.map(([key, ghost]) => (
                            <div
                                key={key}
                                className="search-result-item"
                                onClick={() => selectGhost(key, ghost)}
                            >
                                <img
                                    src={ghost.image}
                                    alt={ghost.name}
                                    className="search-result-icon"
                                />
                                <span>{ghost.name}</span>
                            </div>
                        ))}
                    </div>
                )}
                {showResults && searchResults.length === 0 && searchTerm.length > 0 && (
                    <div className="search-results" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 10 }}>
                        <div className="no-results">
                            No se encontraron fantasmas
                        </div>
                    </div>
                )}
            </div>
            <img
                src={require('../img/backpack.png')}
                alt="Mochila"
                className="backpack-icon"
                style={{ marginLeft: '20px', cursor: 'pointer', width: '40px', height: '35px' }}
                onClick={onBackpackClick}
            />
        </div>
    );
}

export default GhostSearch;