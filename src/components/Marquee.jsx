export default function Marquee() {
  const items = [
    'FREE SHIPPING WORLDWIDE',
    'NEW DROP FRIDAY',
    '20% OFF FIRST ORDER',
    'EXCLUSIVE DESIGNS'
  ];

  return (
    <div className="marquee-banner">
      <div className="marquee-content">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i}>
            {item}
            <span className="separator">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}



