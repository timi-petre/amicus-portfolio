'use client';
import React, { useState } from 'react';
import style from './styles/components/Game.module.css';

// type TSquare = {
// 	value: string,
// 	onSquareClick: () => void,
// };

// type TBoard = {
// 	xIsNext: boolean;
// 	squares: string[];
// 	onPlay: () => any;
// };

function Square({ value, onSquareClick }) {
	return (
		<button className={style.square} onClick={onSquareClick}>
			{value}
		</button>
	);
}

export function Board({ xIsNext, squares, onPlay }) {
	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = '0';
		}
		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Winner ' + winner;
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : '0');
	}

	return (
		<div>
			<div>{status}</div>
			<br />

			<div className={style.board_row}>
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className={style.board_row}>
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className={style.board_row}>
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</div>
	);
}

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);

	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
	}
	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = 'Go to move #' + move;
		} else {
			description = 'Go to start';
		}

		return (
			<li key={move}>
				<button
					className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900"
					onClick={() => jumpTo(move)}
				>
					{description}
				</button>
			</li>
		);
	});

	return (
		<>
			<h1 className="text-center my-5 text-6xl">Tic Tac Toe</h1>
			<br />
			<div className={`${style.game} flex items-center justify-center`}>
				<div className={style.game_board}>
					<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
				</div>
				<div className={style.game_info}>
					<ol>{moves}</ol>
				</div>
			</div>
		</>
	);
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
