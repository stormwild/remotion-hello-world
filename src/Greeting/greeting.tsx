import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from './title';

export const Greeting = () => {
	// Const frame = useCurrentFrame();
	// const {durationInFrames, fps} = useVideoConfig();

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Sequence from={10}>
				<Title title="Hello World" />
			</Sequence>
		</AbsoluteFill>
	);
};
