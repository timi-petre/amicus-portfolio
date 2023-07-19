import style from './styles/components/Home.module.css';

export default function Home() {
	let shortDescription = `I Am Passionate Developer`;
	let longDescription =
		'The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.';
	let intro = 'Hello there...';
	let fullName = 'Timotei Petre';
	return (
		<>
			<div className="flex justify-around">
				<div className="flex flex-col justify-center">
					<p>{intro}</p>
					<h1>{fullName}</h1>
					<p>{shortDescription}</p>
					<p>{longDescription}</p>
				</div>

				<div className={style.blob}></div>
			</div>
		</>
	);
}
