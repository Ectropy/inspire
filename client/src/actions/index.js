// selectBand is an ActionCreator
// It returns an action that has to be object with a type property.

const SELECT_BAND = 'SELECT_BAND';

export function selectBand (band) {
	console.log('You have selected: ', band.name);
	// selectBand is an ActionCreator, it needs to return an ActionCreator
	// which is an object that must have a type property
	return {
		type: SELECT_BAND,
		payload: band
	};
}
