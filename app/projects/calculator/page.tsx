'use client'

import { useState } from 'react'
import styles from './styles/Calculator.module.css'

function ButtonSquare({ value }: { value: string }) {
	function handleClick(e: any) {
		console.log('clicked ' + e.target.value)
	}

	return (
		<button className={`${styles.button}`} onClick={handleClick} value={value}>
			{value}
		</button>
	)
}

export default function Board() {
	const [val, setVal] = useState('0')

	function handleChange(e: any) {
		setVal(e.target.value)
	}

	function handleClick(e: any) {
		alert('clicked ' + e.target.value)
		ButtonSquare(e.target.value)
	}

	function handleClear() {
		setVal('0')
	}

	function handleDel() {
		if (val.length > 1) {
			setVal(val.slice(0, -1))
		} else {
			setVal('0')
		}
	}

	function handleEqual() {
		let result = eval(val)
		setVal(result.toString())
	}

	function handleDot() {
		if (val.indexOf('.') === -1) {
			setVal(val + '.')
		}
	}

	function handleAC() {
		setVal('0')
	}

	function handleNumber(e: any) {
		if (val === '0') {
			setVal(e.target.value)
		}
	}

	return (
		<>
			<h1 className="text-center my-5 text-6xl">Calculator</h1>
			<div className="text-center flex justify-center align-middle my-20">
				<div id={styles.calculator}>
					<input
						type="text"
						name=""
						id={styles.display}
						value={val}
						onChange={handleChange}
						disabled
					/>
					<br />
					<div className="board-row">
						<ButtonSquare value="AC" />
						<ButtonSquare value="DEL" />
						<ButtonSquare value="." />
						<ButtonSquare value="/" />
					</div>
					<br />
					<div className="board-row">
						<ButtonSquare value="7" />
						<ButtonSquare value="8" />
						<ButtonSquare value="9" />
						<ButtonSquare value="*" />
					</div>
					<br />
					<div className="board-row">
						<ButtonSquare value="4" />
						<ButtonSquare value="5" />
						<ButtonSquare value="6" />
						<ButtonSquare value="-" />
					</div>
					<br />
					<div className="board-row">
						<ButtonSquare value="1" />
						<ButtonSquare value="2" />
						<ButtonSquare value="3" />
						<ButtonSquare value="+" />
					</div>
					<br />
					<div className="board-row">
						<ButtonSquare value="00" />
						<ButtonSquare value="0" />
						<ButtonSquare value="=" />
					</div>
				</div>
			</div>
		</>
	)
}
