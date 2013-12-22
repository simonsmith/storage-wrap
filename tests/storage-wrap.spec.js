describe('Storage wrap', function() {
    beforeEach(function() {
        sessionStorage.clear();
        localStorage.clear();
    });

    describe('Setting', function() {
        it('should set primitives', function() {
            storageWrap.setItem('test1', 'this is a test');
            storageWrap.setItem('test2', 1);

            expect(localStorage.getItem('test1')).to.equal('this is a test');
            expect(localStorage.getItem('test2')).to.equal('1');
        });

        it('should set objects', function() {
            storageWrap.setItem('test', {
                test: 'this is a test'
            });

            expect(localStorage.getItem('test')).to.equal('{"test":"this is a test"}');
        });

        it('should set arrays', function() {
            storageWrap.setItem('test', ['this', 'is', 'a', 'test']);

            expect(localStorage.getItem('test')).to.equal('["this","is","a","test"]');
        });
    });

    describe('Getting', function() {
        it('should get primitives', function() {
            storageWrap.setItem('test1', 'this is a test');
            storageWrap.setItem('test2', 1);

            expect(storageWrap.getItem('test1')).to.equal('this is a test');
            expect(storageWrap.getItem('test2')).to.equal(1);
        });

        it('should get objects', function() {
            storageWrap.setItem('test', {
                test: 'this is a test'
            });

            expect(storageWrap.getItem('test')).to.be.an('object');
            expect(storageWrap.getItem('test').test).to.equal('this is a test');
        });

        it('should get arrays', function() {
            storageWrap.setItem('test', ['this', 'is', 'a', 'test']);

            expect(storageWrap.getItem('test')).to.be.an('array');
            expect(storageWrap.getItem('test')[1]).to.equal('is');
        });
    });

    describe('Removing', function() {
        it('should remove an item', function() {
            storageWrap.setItem('test', 'hello');
            expect(localStorage.getItem('test')).to.equal('hello');

            storageWrap.removeItem('test');
            expect(localStorage.getItem('test')).to.not.exist;
        });
    });
});
