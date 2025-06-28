import { useUser } from '@/components/UserProvider';
import { useEffect, useState } from 'react';

export default function RaffleWidget() {
  const { user } = useUser();
  const [timeLeft, setTimeLeft] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [count,setCount] = useState(10);

  // Set the time left until midnight UTC
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const nextMidnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
      setTimeLeft(Math.floor((nextMidnight.getTime() - now.getTime()) / 1000));
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!user) return null;

  // Format time left
  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  // Handle join raffle
  const handleJoinRaffle = () => {
    setShowToast(true);
    setCount(count+1);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '12px',
        zIndex: 1000,
        width: 280,
        opacity:0.95,
        background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 90%)',
        borderRadius: 20,
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        color: 'white',
        padding: 18,
        fontFamily: 'inherit'
      }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
          <span style={{fontSize: 22, fontWeight: 700, display: 'flex', alignItems: 'center'}}>
            <span role="img" aria-label="gift" style={{marginRight: 8}}>🎁</span>
            Daily Raffle
          </span>
          <span style={{background: '#fde68a', color: '#b45309', borderRadius: 8, padding: '2px 8px', fontSize: 12, fontWeight: 600}}>Featured</span>
        </div>
        <div style={{fontSize: 16, marginBottom: 12}}>Win exclusive NFTs!</div>
        <div style={{background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: 12, marginBottom: 12, textAlign: 'center'}}>
          <div style={{fontSize: 12, letterSpacing: 1, marginBottom: 4}}>Time Remaining</div>
          <div style={{fontSize: 28, fontWeight: 700, letterSpacing: 2}}>
            {hours} : {minutes} : {seconds}
          </div>
          <div style={{fontSize: 12, color: '#fbbf24', marginTop: 2}}>Draw at midnight UTC</div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
          <span style={{fontSize: 15}}><b>{count}</b> entries</span>
          <span style={{fontSize: 15}}>Prize: <b>5 ETH</b></span>
        </div>
        <button
          style={{
            width: '100%',
            background: 'linear-gradient(90deg, #f59e42 0%, #f97316 100%)',
            color: 'white',
            fontWeight: 700,
            fontSize: 18,
            border: 'none',
            borderRadius: 12,
            padding: '12px 0',
            marginTop: 8,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
          onClick={handleJoinRaffle}
        >
          Join Raffle - Free Entry!
        </button>
        <div style={{fontSize: 12, color: '#e0e7ff', marginTop: 8, textAlign: 'center'}}>
          One entry per account • Draw at midnight UTC
        </div>
      </div>
      {/* Toast Popup */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: 20,
          right: 100,
          background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
          color: 'white',
          padding: '12px 22px',
          borderRadius: 12,
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          fontSize: 16,
          fontWeight: 500,
          zIndex: 2000,
          transition: 'opacity 0.3s'
        }}>
          🎉 You have joined the raffle!
        </div>
      )}
    </>
  );
}
