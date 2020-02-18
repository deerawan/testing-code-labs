const proxyquire = require("proxyquire");
const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

describe("MyApp", function() {
  describe("process", function() {
    beforeEach(() => {
      sinon.restore();
    });

    it("should not call save when no data found", async function() {
      const getFooStub = sinon.stub().returns(undefined);
      const saveFooStub = sinon.stub();

      function MyWrapperStub() {
        return {
          getFoo: getFooStub,
          saveFoo: saveFooStub
        };
      }
      const sut = proxyquire("./MyApp", { "./MyWrapper": MyWrapperStub });

      const msg = { id: "123" };
      await sut.process(msg);

      getFooStub.should.have.been.calledWith("123");
      saveFooStub.should.not.have.been.called;
    });

    it("should call save when data is found", async function() {
      const data = { name: "something" };
      const getFooStub = sinon.stub().returns(data);
      const saveFooStub = sinon.stub();

      function MyWrapperStub() {
        return {
          getFoo: getFooStub,
          saveFoo: saveFooStub
        };
      }
      const sut = proxyquire("./MyApp", { "./MyWrapper": MyWrapperStub });

      const msg = { id: "123" };
      await sut.process(msg);

      getFooStub.should.have.been.calledWith("123");
      saveFooStub.should.have.been.calledWith(data);
    });
  });
});
