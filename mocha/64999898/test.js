const sinon = require('sinon');
const src = require('./index');

describe('test', () => {
  it('returns index with title, path and dogs if dogs array exist', () => {
    const dogs = ['doggy', 'dogg2'];
    const mockReq = {
      path: 'whatever',
      db: {        
        collection: sinon.stub().returnsThis(),
        find: sinon.stub().returnsThis(),
        toArray: sinon.stub().callsFake(callback => {
          callback(null, dogs)
        })
      }
    };

    const mockRes = {
      render: sinon.stub(),
    }

    src.homeDog(mockReq, mockRes);

    sinon.assert.calledWith(mockReq.db.collection, 'dogs');
    sinon.assert.calledWith(mockRes.render, 'index', { title: 'Dogs', path: 'whatever', dogs });
  })

  it('returns index with title', () => {
    const mockReq = {
      path: 'whatever',
      db: {        
        collection: sinon.stub().returnsThis(),
        find: sinon.stub().returnsThis(),
        toArray: sinon.stub().callsFake(callback => {
          callback(null, null)
        })
      }
    };

    const mockRes = {
      render: sinon.stub(),
    }

    src.homeDog(mockReq, mockRes);

    sinon.assert.calledWith(mockRes.render, 'index', { title: 'No Dogs Found' });
  })
})