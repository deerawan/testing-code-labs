import * as sinon from 'sinon';
import * as reportService from './src';
import { expect } from 'chai';

describe("updateDoingToFailedWithLock()", (): void => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => (sandbox = sinon.createSandbox()));
  afterEach(() => sandbox.restore);

  it("should be success", async (): Promise<void> => {
    const fakeManager = {
      getRepository: sandbox.stub().returnsThis(),
      createQueryBuilder: sandbox.stub().returnsThis(),
      useTransaction: sandbox.stub().returnsThis(),
      setLock: sandbox.stub().returnsThis(),
      update: sandbox.stub().returnsThis(),
      set: sandbox.stub().returnsThis(),
      where: sandbox.stub().returnsThis(),
      execute: sandbox.stub().returnsThis(),      
    }
    const fakeQueryRunner = {
      manager: fakeManager,
    };

    await reportService.updateDoingToFailedWithLock(fakeQueryRunner);
    expect(fakeManager.execute.calledOnce).to.be.true;
    expect(fakeManager.createQueryBuilder.calledWith('report')).to.be.true;
  });
});