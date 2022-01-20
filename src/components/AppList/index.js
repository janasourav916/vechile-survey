import { memo, useRef } from "react";
import PropTypes from "prop-types";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List
} from "react-virtualized";

function AppList({ data = [], onRowClick = () => {}, children }) {
  const cache = useRef(
    new CellMeasurerCache({
      fixedHeight: true,
      defaultHeight: 70
    })
  );

  return (
    <AutoSizer>
      {({ width, height }) => {
        return (
          <List
            width={width}
            height={height}
            rowHeight={cache.current.defaultHeight}
            rowCount={data.length}
            deferredMeasurementCache={cache.current}
            rowRenderer={({ key, index, style, parent }) => {
              const selectData = data[index];
              return (
                <CellMeasurer
                  key={key}
                  cache={cache.current}
                  parent={parent}
                  columnIndex={0}
                  rowIndex={index}
                >
                  <div onClick={() => onRowClick(selectData)} style={style}>
                    {children({ key, index, style, parent, data: selectData })}
                  </div>
                </CellMeasurer>
              );
            }}
          />
        );
      }}
    </AutoSizer>
  );
}
AppList.propTypes = {
  data: PropTypes.array.isRequired,
  onRowClick: PropTypes.func
};
export default memo(AppList);
