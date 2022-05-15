import React from 'react'
import './intro.css'
import Spline from '@splinetool/react-spline';

const intro = () => {
    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="intro-left-full">
                    <h2 className="intro-intro">Merhaba Benim Adım</h2>
                    <h2 className="intro-name">Ferit Kodal</h2>
                    <div className='intro-title'>
                        <div className='intro-title-full'>
                            <div className="intro-title-item">Web Tasarımı</div>
                            <div className="intro-title-item">Mobil Uygulama Geliştirme</div>
                            <div className="intro-title-item">Sosyal Medya Yönetimi</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        Mobil uygulama ve Web Tarsarımı alanlarına çalışmalar yapmaktan
                        son derece zevk alarak her geçen gün kendimi bu alanlarda geliştiriyorum.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className='intro-right-spline'>    {/* boyutlandırma eksik */}
                    <Spline scene="https://prod.spline.design/vt9YfTKPrJApEUhM/scene.splinecode" />
                </div>
            </div>
        </div>
    )
}

export default intro