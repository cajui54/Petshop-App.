import React, { Suspense } from "react";
import ScreenService from "./_components/screen-service";
import SkeletonItem from "../../_components/skeleton-item";
import ScheduleManager from "./_components/schedule-manager";

const ScheduleClientPage = () => {
  return (
    <div className="w-full pb-3">
      <Suspense fallback={<SkeletonItem />}>
        <ScreenService />
      </Suspense>

      <Suspense fallback={<SkeletonItem />}>
        <ScheduleManager />
      </Suspense>
    </div>
  );
};

export default ScheduleClientPage;
