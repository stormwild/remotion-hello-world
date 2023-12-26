import {CSSProperties} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from '../HelloWorld/constants';

const titleStyles: CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: '8rem',
	textAlign: 'center',
	bottom: '1rem',
	width: '100%',
};

const spanStyles: CSSProperties = {
	marginLeft: '0.5rem',
	marginRight: '0.5rem',
	display: 'inline-block',
};

export const Title = ({title}: {title: string}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const words = title.split(' ');
	return (
		<h1 style={titleStyles}>
			{words.map((t, i) => {
				const delay = i * 5;
				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});
				return (
					<span
						key={t}
						style={{
							...spanStyles,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
