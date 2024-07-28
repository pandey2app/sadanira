import React from 'react'
import Styles from './creatersCard.module.css'

const UserProfileCard = ({creator}) => {
    return (
        <>
            <div className={`${Styles.box1} ${Styles.box}`}>
                <div className={`${Styles.content}`}>
                    <div className={`${Styles.image}`}>
                        <img src={creator.image} alt={`${creator.name}`} />
                    </div>
                    <div className={`${Styles.level}`}>
                        <p>{creator.membershipType}</p>
                    </div>
                    <div className={`${Styles.text}`}>
                        <p className={`${Styles.name}`}>{creator.name}</p>
                        <p className={`${Styles.job_title}`}>{creator.artform}</p>
                        {/* <p className={`${Styles.job_description}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, ipsam a amet laboriosam eligendi.</p> */}
                    </div>
                    <div className={`${Styles.icons}`}>
                        <button className={`${Styles.iconsButton}`}>
                            <ion-icon name="logo-dribbble"></ion-icon>
                        </button>
                        <button className={`${Styles.iconsButton}`}>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </button>
                        <button className={`${Styles.iconsButton}`}>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </button>
                        <button className={`${Styles.iconsButton}`}>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </button>
                        <button className={`${Styles.iconsButton}`}>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </button>
                        <button className={`${Styles.iconsButton}`}>
                            <ion-icon name="logo-behance"></ion-icon>
                        </button>
                    </div>
                    <div className={`${Styles.button}`}>
                        <div>
                            <button className={`${Styles.message} ${Styles.connectionButton}`} type="button">About</button>
                        </div>
                        <div>
                            <button className={`${Styles.connect} ${Styles.connectionButton}`} type="button">Posts</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfileCard