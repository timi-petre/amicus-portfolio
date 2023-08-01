import styles from './styles/Calculator.module.css'

export default function Calculator() {
	return (
		<>
			<h1 className="text-center my-5 text-6xl">Calculator</h1>
			<div className="text-center flex justify-center align-middle my-20">
				<div id={styles.calculator}>
					<input type="text" name="" id={styles.display} disabled />
					<br />
					<button id="ac" className={` ${styles.button}`} style={{ color: '#bf4d5d' }}>
						AC
					</button>
					<button id="de" className={`${styles.button}`} style={{ color: '#219ebc' }}>
						DEL
					</button>
					<button id="." className={`${styles.button}`} style={{ color: '#219ebc' }}>
						.
					</button>
					<button id="/" className={`${styles.button}`} style={{ color: '#219ebc' }}>
						/
					</button>
					<br />
					<button id="7" className={`${styles.button}`}>
						7
					</button>
					<button id="8" className={`${styles.button}`}>
						8
					</button>
					<button id="9" className={`${styles.button}`}>
						9
					</button>
					<button id="*" className={`${styles.button}`} style={{ color: '#219ebc' }}>
						*
					</button>
					<br />
					<button id="4" className={`${styles.button}`}>
						4
					</button>
					<button id="5" className={`${styles.button}`}>
						5
					</button>
					<button id="6" className={`${styles.button}`}>
						6
					</button>
					<button id="-" className={`${styles.button}`} style={{ color: '#219ebc' }}>
						-
					</button>
					<br />
					<button id="1" className={`${styles.button}`}>
						1
					</button>
					<button id="2" className={`${styles.button}`}>
						2
					</button>
					<button id="3" className={`${styles.button}`}>
						3
					</button>
					<button id="+" className={`${styles.button} `} style={{ color: '#219ebc' }}>
						+
					</button>
					<br />
					<button id="00" className={`${styles.button}`}>
						00
					</button>
					<button id="0" className={`${styles.button}`}>
						0
					</button>
					<button
						id="="
						className={`${styles.button} `}
						style={{ width: 'calc(50% - 10px)' }}
					>
						=
					</button>
				</div>
			</div>
		</>
	)
}
