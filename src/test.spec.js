
import Game from './Game';
describe('Game Test', ()=> {
    var game;
    beforeEach(()=> {
        game = new Game();
    });
    it('Game test 1', ()=> {
        game.add(3);
        expect(game.getSource()).toBe(4);
    });

})