const Report = '';
enum ReportStatus {
  FAILED = 0
}

export async function updateDoingToFailedWithLock(queryRunner: any) {
  await queryRunner.manager
    .getRepository(Report)
    .createQueryBuilder("report")
    .useTransaction(true)
    .setLock("pessimistic_write")
    .update(Report)
    .set({ status: ReportStatus.FAILED })
    .where(`(status = "doing")`)
    .execute();
}

