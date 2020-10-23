import { fillBody } from './fillBody';
describe('fillBody Test ts', ()=> {
    beforeAll(async ()=> {
      fillBody();
    });
    afterAll(async ()=> {
      document.getElementById('wrapper-div').remove;
    });
    it('fillBody has worked', ()=> {
      const heading = document.getElementById('heading-div');
      expect(heading.innerHTML).toContain('heading');
    });

})