import Hex from './Hex';

export default class GameHex extends Hex {
	public taken: 'white' | 'blue' | '' = '';
	public letter: string | null = '';
}
