'use client'

import { useState } from 'react'
import styles from './styles/Calculator.module.css'

function ButtonSquare({ value, onClick }: { value: any; onClick: (value: any) => void }) {
	function handleClick(e: any) {
		e.preventDefault()
		console.log('clicked ' + value)
		onClick(value)
	}

	return (
		<button className={`${styles.button}`} onClick={handleClick} value={value}>
			{value}
		</button>
	)
}

export default function Board() {
	const [val, setVal] = useState('0')

	function showInput(value: any) {
		if (value === 'AC') {
			setVal('0')
		} else if (value === 'DEL') {
			setVal(prevVal => prevVal.slice(0, -1) || '0')
		} else if (value === '=') {
			try {
				setVal(eval(val).toString())
			} catch (error) {
				setVal('Error')
			}
		} else {
			setVal(prevVal => (prevVal === '0' ? value : prevVal + value))
		}
	}

	return (
		<>
			<h1 className="text-center my-5 text-6xl">Calculator</h1>
			<div className="text-center flex justify-center align-middle my-20">
				<div id={styles.calculator}>
					<input type="text" name="" id={styles.display} value={val} disabled />
					<br />
					<div className="board-row">
						<ButtonSquare value="AC" onClick={showInput} />
						<ButtonSquare value="DEL" onClick={showInput} />
						<ButtonSquare value="." onClick={showInput} />
						<ButtonSquare value="/" onClick={showInput} />
					</div>
					<br />
					<div className="board-row">
						<ButtonSquare value="7" onClick={showInput} />
						<ButtonSquare value="8" onClick={showInput} />
						<ButtonSquare value="9" onClick={showInput} />
						<ButtonSquare value="*" onClick={showInput} />
					</div>
					<br />
					<div className="board-row">
						<ButtonSquare value="4" onClick={showInput} />
						<ButtonSquare value="5" onClick={showInput} />
						<ButtonSquare value="6" onClick={showInput} />
						<ButtonSquare value="-" onClick={showInput} />
					</div>
					<br />
					<div className="board-row">
						<ButtonSquare value="1" onClick={showInput} />
						<ButtonSquare value="2" onClick={showInput} />
						<ButtonSquare value="3" onClick={showInput} />
						<ButtonSquare value="+" onClick={showInput} />
					</div>
					<br />
					<div className="board-row">
						<ButtonSquare value="00" onClick={showInput} />
						<ButtonSquare value="0" onClick={showInput} />
						<ButtonSquare value="=" onClick={showInput} />
					</div>
				</div>
			</div>
		</>
	)
}

// function handleClear() {
// 	setVal('0')
// }

// function handleDel() {
// 	if (val.length > 1) {
// 		setVal(val.slice(0, -1))
// 	} else {
// 		setVal('0')
// 	}
// }

// function handleEqual() {
// 	let result = eval(val)
// 	setVal(result.toString())
// }

// function handleDot() {
// 	if (val.indexOf('.') === -1) {
// 		setVal(val + '.')
// 	}
// }

// function handleAC() {
// 	setVal('0')
// }

// function handleNumber(e: any) {
// 	if (val === '0') {
// 		setVal(e.target.value)
// 	}
// }
