import { useState, useMemo } from 'react';
import { ghostData } from '../data/ghostData';

export function useEvidence() {
    const [evidenceStates, setEvidenceStates] = useState({});
    const [selectedGhost, setSelectedGhost] = useState(null);

    const handleEvidenceClick = (evidence, action) => {
        setEvidenceStates(prev => {
            const currentState = prev[evidence];
            const newStates = { ...prev };

            if (action === 'yes') {
                if (currentState === true) {
                    delete newStates[evidence];
                } else {
                    newStates[evidence] = true;
                }
            } else if (action === 'no') {
                if (currentState === false) {
                    delete newStates[evidence];
                } else {
                    newStates[evidence] = false;
                }
            }

            return newStates;
        });
    };

    const clearAllEvidence = () => {
        setEvidenceStates({});
    };

    const possibleGhosts = useMemo(() => {
        const selectedEvidences = Object.keys(evidenceStates).filter(key => evidenceStates[key] === true);
        const eliminatedEvidences = Object.keys(evidenceStates).filter(key => evidenceStates[key] === false);

        const possible = [];

        for (const [key, ghost] of Object.entries(ghostData)) {
            let isValid = true;

            for (const evidence of selectedEvidences) {
                if (!ghost.evidences.includes(evidence)) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                for (const evidence of eliminatedEvidences) {
                    if (ghost.evidences.includes(evidence)) {
                        isValid = false;
                        break;
                    }
                }
            }

            if (isValid) {
                possible.push({ ...ghost, key });
            }
        }

        return possible;
    }, [evidenceStates]);

    return {
        evidenceStates,
        handleEvidenceClick,
        clearAllEvidence,
        possibleGhosts,
        selectedGhost,
        setSelectedGhost
    };
}