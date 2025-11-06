'use client';

import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('hi');
  const [activeTab, setActiveTab] = useState(0);

  const content = {
    hi: {
      title: '🪔 Diwali पर Electronics सस्ते क्यों मिलते हैं?',
      subtitle: 'जानिए festival discounts के पीछे का पूरा science',
      tabs: [
        'मुख्य कारण',
        'व्यापार रणनीति',
        'बाज़ार विश्लेषण',
        'खरीदारी टिप्स'
      ],
      reasons: [
        {
          icon: '📦',
          title: 'Stock Clearance (पुराना माल बेचना)',
          desc: 'Companies को नए models launch करने से पहले पुराना stock खत्म करना होता है। Festival season सबसे बड़ा मौका है inventory clear करने का।',
          impact: 'कीमत में 15-30% तक कमी'
        },
        {
          icon: '📈',
          title: 'Bulk Sales Target (थोक बिक्री)',
          desc: 'Q3-Q4 में companies के पास बड़े sales targets होते हैं। Diwali में ज्यादा volume बेचकर वो yearly goals achieve करती हैं।',
          impact: 'Extra cashback और offers'
        },
        {
          icon: '🏭',
          title: 'Manufacturer Subsidies (निर्माता सहायता)',
          desc: 'Brands खुद retailers को support करते हैं discounts देने में। यह marketing investment है जो brand visibility बढ़ाता है।',
          impact: 'असली discounts, fake नहीं'
        },
        {
          icon: '💰',
          title: 'High Purchase Intent (खरीदने की इच्छा)',
          desc: 'लोगों के पास bonus, त्योहारी बचत होती है। Competition बढ़ जाती है, इसलिए companies ज्यादा offers देती हैं।',
          impact: 'Multiple payment options'
        },
        {
          icon: '🔄',
          title: 'Product Lifecycle (उत्पाद जीवनकाल)',
          desc: 'New models आने वाले होते हैं (January-March में)। Companies को पुराने models की कीमत गिरानी पड़ती है।',
          impact: '20-40% discount older models पर'
        },
        {
          icon: '🎯',
          title: 'Competitive Pressure (प्रतिस्पर्धा)',
          desc: 'Amazon, Flipkart, retail stores सब compete करते हैं। कोई पीछे नहीं रहना चाहता, इसलिए सबसे बेहतर deals देते हैं।',
          impact: 'Price wars = customer को फायदा'
        }
      ],
      strategy: {
        title: 'Companies की Marketing Strategy',
        points: [
          {
            icon: '🎪',
            text: 'Psychological Pricing: ₹49,999 दिखता है ₹50,000 से सस्ता, पर फर्क सिर्फ ₹1 का'
          },
          {
            icon: '⏰',
            text: 'Flash Sales & Urgency: "सिर्फ 2 घंटे के लिए" - FOMO (Fear of Missing Out) create करता है'
          },
          {
            icon: '🎁',
            text: 'Bundle Offers: Laptop + Bag + Mouse = Free लगता है, पर कीमत में पहले से included'
          },
          {
            icon: '💳',
            text: 'EMI & Cashback: No cost EMI में interest छुपा होता है higher base price में'
          },
          {
            icon: '📊',
            text: 'Inflated MRP: ₹80,000 MRP दिखाकर ₹50,000 में बेचना (असली worth ₹48,000 है)'
          },
          {
            icon: '🏷️',
            text: 'Exchange Bonus: पुराना laptop लेकर inflated value देते दिखाते हैं'
          }
        ]
      },
      analysis: {
        title: 'क्या सच में सस्ता मिलता है?',
        comparison: [
          { aspect: 'असली discount', normal: '5-8%', festival: '15-25%', reality: '✅ हाँ, सच में फायदा' },
          { aspect: 'Stock availability', normal: 'सीमित models', festival: 'सभी variants', reality: '✅ ज्यादा choice' },
          { aspect: 'EMI options', normal: 'Standard', festival: 'No cost EMI', reality: '⚠️ Check hidden charges' },
          { aspect: 'Warranty/Support', normal: 'Standard', festival: 'Extended free', reality: '✅ Extra benefits' },
          { aspect: 'Product quality', normal: 'Same', festival: 'Same', reality: '✅ कोई compromise नहीं' }
        ]
      },
      tips: {
        title: '💡 Smart Shopping Tips',
        dos: [
          'Price track करें 2-3 weeks पहले से (Google/browser extensions)',
          'Reviews पढ़ें - discount में जल्दबाजी न करें',
          'Bank offers compare करें - कौन सा card best है',
          'Cashback terms पढ़ें - कब मिलेगा, कैसे मिलेगा',
          'Warranty card और bill जरूर लें - भविष्य के लिए जरूरी'
        ],
        donts: [
          'सिर्फ discount देखकर न खरीदें - जरूरत check करें',
          'Flash sale में panic न करें - औctions में overpay न हो',
          'Exchange value blindly accept न करें - negotiate करें',
          'No cost EMI को completely free न समझें - calculate करें',
          'Sponsored/promoted products पर न टूटें - research करें'
        ]
      },
      bestTime: {
        title: '📅 साल में कब खरीदें?',
        periods: [
          { time: 'Diwali (Oct-Nov)', discount: '20-30%', status: '🔥 Best' },
          { time: 'Republic Day', discount: '15-25%', status: '⭐ Very Good' },
          { time: 'Amazon Prime Day', discount: '15-20%', status: '⭐ Good' },
          { time: 'Back to School', discount: '10-15%', status: '👍 Decent' },
          { time: 'Regular Days', discount: '5-8%', status: '😐 Average' }
        ]
      }
    },
    en: {
      title: '🪔 Why Are Electronics Cheaper During Diwali?',
      subtitle: 'Understanding the science behind festival discounts',
      tabs: [
        'Main Reasons',
        'Business Strategy',
        'Market Analysis',
        'Shopping Tips'
      ],
      reasons: [
        {
          icon: '📦',
          title: 'Stock Clearance',
          desc: 'Companies need to clear old inventory before launching new models. Festival season is the biggest opportunity for inventory clearance.',
          impact: 'Prices drop 15-30%'
        },
        {
          icon: '📈',
          title: 'Bulk Sales Targets',
          desc: 'Companies have big sales targets in Q3-Q4. By selling high volumes during Diwali, they achieve yearly goals.',
          impact: 'Extra cashback & offers'
        },
        {
          icon: '🏭',
          title: 'Manufacturer Subsidies',
          desc: 'Brands support retailers in offering discounts. This is marketing investment to increase brand visibility.',
          impact: 'Real discounts, not fake'
        },
        {
          icon: '💰',
          title: 'High Purchase Intent',
          desc: 'People have bonuses and festival savings. Competition increases, so companies offer better deals.',
          impact: 'Multiple payment options'
        },
        {
          icon: '🔄',
          title: 'Product Lifecycle',
          desc: 'New models are coming (January-March). Companies reduce prices on older models.',
          impact: '20-40% discount on older models'
        },
        {
          icon: '🎯',
          title: 'Competitive Pressure',
          desc: 'Amazon, Flipkart, retail stores all compete. Nobody wants to lag behind, so they offer the best deals.',
          impact: 'Price wars = customer benefits'
        }
      ],
      strategy: {
        title: 'Company Marketing Strategy',
        points: [
          {
            icon: '🎪',
            text: 'Psychological Pricing: ₹49,999 looks cheaper than ₹50,000, but difference is only ₹1'
          },
          {
            icon: '⏰',
            text: 'Flash Sales & Urgency: "Only for 2 hours" - creates FOMO (Fear of Missing Out)'
          },
          {
            icon: '🎁',
            text: 'Bundle Offers: Laptop + Bag + Mouse = Looks free, but cost already included'
          },
          {
            icon: '💳',
            text: 'EMI & Cashback: No cost EMI has interest hidden in higher base price'
          },
          {
            icon: '📊',
            text: 'Inflated MRP: Show ₹80,000 MRP, sell at ₹50,000 (real worth ₹48,000)'
          },
          {
            icon: '🏷️',
            text: 'Exchange Bonus: Take old laptop, show inflated value given'
          }
        ]
      },
      analysis: {
        title: 'Is It Really Cheaper?',
        comparison: [
          { aspect: 'Real discount', normal: '5-8%', festival: '15-25%', reality: '✅ Yes, real benefit' },
          { aspect: 'Stock availability', normal: 'Limited models', festival: 'All variants', reality: '✅ More choice' },
          { aspect: 'EMI options', normal: 'Standard', festival: 'No cost EMI', reality: '⚠️ Check hidden charges' },
          { aspect: 'Warranty/Support', normal: 'Standard', festival: 'Extended free', reality: '✅ Extra benefits' },
          { aspect: 'Product quality', normal: 'Same', festival: 'Same', reality: '✅ No compromise' }
        ]
      },
      tips: {
        title: '💡 Smart Shopping Tips',
        dos: [
          'Track prices 2-3 weeks before (Google/browser extensions)',
          'Read reviews - don\'t rush due to discount',
          'Compare bank offers - which card is best',
          'Read cashback terms - when & how you\'ll get it',
          'Get warranty card & bill - important for future'
        ],
        donts: [
          'Don\'t buy just seeing discount - check if you need it',
          'Don\'t panic in flash sales - don\'t overpay',
          'Don\'t blindly accept exchange value - negotiate',
          'Don\'t think no cost EMI is completely free - calculate',
          'Don\'t fall for sponsored products - do research'
        ]
      },
      bestTime: {
        title: '📅 When to Buy During the Year?',
        periods: [
          { time: 'Diwali (Oct-Nov)', discount: '20-30%', status: '🔥 Best' },
          { time: 'Republic Day', discount: '15-25%', status: '⭐ Very Good' },
          { time: 'Amazon Prime Day', discount: '15-20%', status: '⭐ Good' },
          { time: 'Back to School', discount: '10-15%', status: '👍 Decent' },
          { time: 'Regular Days', discount: '5-8%', status: '😐 Average' }
        ]
      }
    }
  };

  const t = content[lang];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <div style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', padding: '20px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <h1 style={{ color: 'white', margin: 0, fontSize: 'clamp(1.2rem, 4vw, 2rem)' }}>{t.title}</h1>
          <button
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            style={{
              background: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              marginTop: '10px'
            }}
          >
            {lang === 'hi' ? '🇬🇧 English' : '🇮🇳 हिंदी'}
          </button>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.9)', textAlign: 'center', margin: '10px 0 0', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
          {t.subtitle}
        </p>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
          {t.tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                background: activeTab === idx ? 'white' : 'rgba(255,255,255,0.2)',
                color: activeTab === idx ? '#667eea' : 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {activeTab === 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {t.reasons.map((reason, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '25px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{reason.icon}</div>
                <h3 style={{ color: '#667eea', marginBottom: '10px', fontSize: '1.3rem' }}>{reason.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>{reason.desc}</p>
                <div style={{ background: '#f0f4ff', padding: '10px', borderRadius: '8px', fontWeight: 'bold', color: '#667eea', fontSize: '0.9rem' }}>
                  {reason.impact}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <h2 style={{ color: '#667eea', marginBottom: '25px', fontSize: '1.8rem' }}>{t.strategy.title}</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {t.strategy.points.map((point, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '15px', padding: '20px', background: '#f8f9ff', borderRadius: '10px', alignItems: 'start' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>{point.icon}</div>
                  <p style={{ color: '#444', lineHeight: '1.6', margin: 0, fontSize: '1.05rem' }}>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <h2 style={{ color: '#667eea', marginBottom: '25px', fontSize: '1.8rem' }}>{t.analysis.title}</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#667eea', color: 'white' }}>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '1.1rem' }}>Aspect</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '1.1rem' }}>Normal Days</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '1.1rem' }}>Festival</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '1.1rem' }}>Reality</th>
                  </tr>
                </thead>
                <tbody>
                  {t.analysis.comparison.map((row, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? '#f8f9ff' : 'white' }}>
                      <td style={{ padding: '15px', fontWeight: 'bold', color: '#667eea' }}>{row.aspect}</td>
                      <td style={{ padding: '15px', color: '#666' }}>{row.normal}</td>
                      <td style={{ padding: '15px', color: '#667eea', fontWeight: 'bold' }}>{row.festival}</td>
                      <td style={{ padding: '15px' }}>{row.reality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '30px', background: '#f0f4ff', padding: '20px', borderRadius: '10px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '15px' }}>{t.bestTime.title}</h3>
              {t.bestTime.periods.map((period, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'white', marginBottom: '10px', borderRadius: '8px', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: '#333' }}>{period.time}</span>
                  <span style={{ color: '#667eea', fontWeight: 'bold' }}>{period.discount}</span>
                  <span>{period.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'white', borderRadius: '15px', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
              <h3 style={{ color: '#22c55e', marginBottom: '20px', fontSize: '1.5rem' }}>✅ {lang === 'hi' ? 'करें' : 'DO'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                {t.tips.dos.map((tip, idx) => (
                  <li key={idx} style={{ padding: '10px', background: '#f0fdf4', marginBottom: '10px', borderRadius: '8px', color: '#166534' }}>
                    ✓ {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '20px', fontSize: '1.5rem' }}>❌ {lang === 'hi' ? 'न करें' : 'DON\'T'}</h3>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                {t.tips.donts.map((tip, idx) => (
                  <li key={idx} style={{ padding: '10px', background: '#fef2f2', marginBottom: '10px', borderRadius: '8px', color: '#991b1b' }}>
                    ✗ {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ background: 'rgba(0,0,0,0.3)', color: 'white', textAlign: 'center', padding: '30px 20px', marginTop: '40px' }}>
        <p style={{ margin: 0, fontSize: '1.1rem' }}>
          {lang === 'hi' ? '💡 Smart shopping करें, पैसे बचाएं!' : '💡 Shop smart, save money!'}
        </p>
        <p style={{ margin: '10px 0 0', opacity: 0.8, fontSize: '0.9rem' }}>
          {lang === 'hi' ? 'हमेशा research करें और informed decisions लें' : 'Always research and make informed decisions'}
        </p>
      </div>
    </div>
  );
}
