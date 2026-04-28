import { Props } from "react-infinite-scroll-component";
import _InfiniteScroll from "react-infinite-scroll-component";

import { Spinner } from "../ui/spinner";

const InfiniteScroll = _InfiniteScroll as unknown as React.FC<Props>;

type XProps = Pick<Props, "children" | "dataLength" | "next" | "hasMore"> & {
  loader?: React.ReactNode;
};

export const XInfiniteScroll: React.FC<XProps> = (props) => {
  const loader = (
    <div className="flex justify-center py-4">
      {props.loader ? props.loader : <Spinner className="size-8" />}
    </div>
  );
  return (
    <InfiniteScroll
      style={{ overflow: "hidden" }}
      dataLength={props.dataLength}
      next={props.next}
      hasMore={props.hasMore}
      loader={loader}
    >
      {props.children}
    </InfiniteScroll>
  );
};
