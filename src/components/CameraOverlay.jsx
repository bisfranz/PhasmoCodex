import { useState, useEffect } from 'react';

function CameraOverlay({ onBackpackClick }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [batteryPercentage, setBatteryPercentage] = useState(66);
    const [isEasterEggActive, setIsEasterEggActive] = useState(false);
    const [glitchEffect, setGlitchEffect] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isEasterEggActive) {
            document.body.classList.add('easter-egg-red');
        } else {
            document.body.classList.remove('easter-egg-red');
        }
        return () => {
            document.body.classList.remove('easter-egg-red');
        };
    }, [isEasterEggActive]);

    const handleBatteryClick = () => {
        if (isEasterEggActive) return;

        setIsEasterEggActive(true);
        setGlitchEffect(true);

        setTimeout(() => {
            setBatteryPercentage(666);
        }, 500);

        setTimeout(() => {
            setGlitchEffect(false);
        }, 5000);

        setTimeout(() => {
            setBatteryPercentage(66);
            setIsEasterEggActive(false);
        }, 5000);
    };

    const timestamp = currentTime.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return (
        <>
            {glitchEffect && <div className="glitch-overlay" style={{ zIndex: 900 }}></div>}

            <div className="camera-brackets">
                <div className="bracket top-left"></div>
                <div className="bracket top-right"></div>
                <div className="bracket bottom-left"></div>
                <div className="bracket bottom-right"></div>
            </div>

            <div className="rec-indicator">
                <span>REC</span>
                <div className="red-dot"></div>
            </div>

            <div className="camera-info" style={{ zIndex: 1001 }}>
                <div className="timestamp">{timestamp}</div>
                <div
                    className={`battery ${isEasterEggActive ? 'battery-evil' : ''}`}
                    onClick={handleBatteryClick}
                    style={{ cursor: 'pointer' }}
                >
                    <div className={`battery-icon ${isEasterEggActive ? 'battery-icon-evil' : ''}`}>
                        <div className={`battery-level ${isEasterEggActive ? 'battery-level-evil' : ''}`}></div>
                    </div>
                    <span className={isEasterEggActive ? 'battery-text-evil' : ''}>{batteryPercentage}%</span>
                </div>
            </div>
        </>
    );
}

export default CameraOverlay;