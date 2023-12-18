const hasDuplicateIds=require('./hasduplicateid');

describe('DOM Tree Has Duplicate Ids', () => {

    let root;
    beforeEach(()=>{
        // create mock elements
        root= document.createElement('div');
        //add some childElement to the root

        const child1=document.createElement('p');
        const child2=document.createElement('p');

        root.appendChild(child1);
        root.appendChild(child2);
        
        // Add duplicate ids
        root.id='root';
        child1.id='child';
        child2.id='child';
    });

    afterEach(()=>{
        root=null;
    })

    it('Should be a function', () => {
        expect(typeof hasDuplicateIds).toEqual('function');
    });

    it('Should return a boolean', () => {
        expect(typeof hasDuplicateIds()).toEqual('boolean');
    });
    it('Should return false if no root is passed in', () => {
       expect(hasDuplicateIds()).toBeFalsy();
    });

    it('Should return true if we have duplicate element', () => {
        root.id='root';
        root.children[0].id='child';
        root.children[1].id='child';
        expect(hasDuplicateIds(root)).toBeTruthy();
    });

    it("Should return false if there aren't duplicate element", () => {
        root.id='root';
        root.children[0].id='child1';
        root.children[1].id='child2';

        expect(hasDuplicateIds(root)).toBeFalsy();
    });
    
});
