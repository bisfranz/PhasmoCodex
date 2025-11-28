import EvidenceItem from './EvidenceItem';
import dotsImg from '../img/dots.png';
import emf5Img from '../img/emf5.png';
import orbsImg from '../img/orbs.png';
import spiritboxImg from '../img/spiritbox.png';
import ultravioletImg from '../img/ultraviolet.png';
import freezingImg from '../img/temps.png';
import writingImg from '../img/writing.png';

const evidenceList = [
    { name: "Proyector D.O.T.S", icon: dotsImg, number: 1, shortName: "Proyector D.O.T.S" },
    { name: "Medidor EMF 5", icon: emf5Img, number: 2, shortName: "Medidor EMF 5" },
    { name: "Ultravioleta", icon: ultravioletImg, number: 3, shortName: "Ultravioleta" },
    { name: "Temperaturas heladas", icon: freezingImg, number: 4, shortName: "Temperaturas heladas" },
    { name: "Orbes espectrales", icon: orbsImg, number: 5, shortName: "Orbes espectrales" },
    { name: "Escritura fantasma", icon: writingImg, number: 6, shortName: "Escritura fantasma" },
    { name: "Caja espectral", icon: spiritboxImg, number: 7, shortName: "Caja espectral" }
];

function EvidenceGrid({ evidenceStates, onEvidenceClick }) {
    return (
        <div className="evidence-row">
            {evidenceList.map((evidence) => (
                <EvidenceItem
                    key={evidence.name}
                    evidence={evidence}
                    state={evidenceStates[evidence.name]}
                    onEvidenceClick={onEvidenceClick}
                />
            ))}
        </div>
    );
}

export default EvidenceGrid;