import React, { useEffect } from 'react';
import CameraOverlay from './components/CameraOverlay';
import EvidenceGrid from './components/EvidenceGrid';
import GhostPrediction from './components/GhostPrediction';
import GhostModal from './components/GhostModal';
import GhostSearch from './components/GhostSearch';
import InventoryModal from './components/InventoryModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useEvidence } from './hooks/useEvidence';
import { ghostData } from './data/ghostData';
import { itemData } from './data/itemData';
import logoImg from './img/logo.png';
import './App.css';

const importAll = (r) => r.keys().map(r);
const imageList = importAll(require.context('./img', true, /\.png$/));

function App() {
  const {
    evidenceStates,
    handleEvidenceClick,
    clearAllEvidence,
    possibleGhosts,
    selectedGhost,
    setSelectedGhost
  } = useEvidence();

  const [inventoryOpen, setInventoryOpen] = React.useState(false);

  useEffect(() => {
    imageList.forEach(src => {
      const img = new window.Image();
      img.src = typeof src === 'string' ? src : src.default;
    });
  }, []);

  return (
    <div className="camera-overlay">
      <CameraOverlay onBackpackClick={() => setInventoryOpen(true)} />

      <div className="content">
        <img src={logoImg} alt="Logo" className="main-logo" />
        <h1>Phasmo Codex</h1>
        <div className="subtitle">by
          <a href="https://steamcommunity.com/id/franzschizoid" target="_blank" rel="noopener noreferrer"> Franz</a> |
          <a href="https://github.com/bisfranz/PhasmoCodex" target="_blank" rel="noopener noreferrer"> GitHub</a> |
          <a href="https://discord.gg/Qs6tHSKJTr" target="_blank" rel="noopener noreferrer"> Discord</a> |
          <a href="https://ko-fi.com/franzlabs" target="_blank" rel="noopener noreferrer"> Donar</a>
        </div>

        <GhostSearch
          ghostData={ghostData}
          onGhostSelect={setSelectedGhost}
          onBackpackClick={() => setInventoryOpen(true)}
        />

        <EvidenceGrid
          evidenceStates={evidenceStates}
          onEvidenceClick={handleEvidenceClick}
        />

        <InventoryModal
          open={inventoryOpen}
          items={itemData}
          onClose={() => setInventoryOpen(false)}
        />

        <div className="action-buttons">
          <button onClick={clearAllEvidence} className="clear-btn">
            Eliminar
          </button>
        </div>

        <GhostPrediction
          possibleGhosts={possibleGhosts}
          onGhostSelect={setSelectedGhost}
        />

      </div>

      <GhostModal
        ghost={selectedGhost}
        onClose={() => setSelectedGhost(null)}
      />

      <div className="noise-overlay"></div>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
