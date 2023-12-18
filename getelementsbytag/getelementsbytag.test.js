const getElementsByTag=require('./getelementsbytag');


describe('Get Element By Tag', ()=>{
    it('Should be a function', () => {
        expect(typeof getElementsByTag).toEqual('function');
    });

    it('Should return an array', () => {
        expect(Array.isArray(getElementsByTag())).toEqual(true);
    });
    
    it('Should return an empty array if no root is passed in', () => {
       expect(getElementsByTag()).toEqual([]);
    });

    it('Should return only the root element if no tagName is passed in', () => {
       expect(getElementsByTag('root')).toEqual(['root']);
    });

    it('Should return only the root element if no tagName is passed in', () => {
        const root=document.createElement('div');
        expect(getElementsByTag(root)).toEqual([root]);
    });

    it('Should return the correct elements', () => {
        const root= document.createElement('div');
        //add some childElement to the root

        const p1=document.createElement('p');
        const p2=document.createElement('p');
        const p3=document.createElement('p');
        const p4=document.createElement('p');
        const span=document.createElement('span');
        p1.appendChild(p2);
        p3.appendChild(span);
        root.appendChild(p1);
        root.appendChild(p3);
        span.appendChild(p4);

        expect(getElementsByTag(root,'p')).toEqual([p1,p2,p3,p4]);

    });
    
})