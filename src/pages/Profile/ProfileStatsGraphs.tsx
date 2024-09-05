import React from 'react';
import styles from './ProfileStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar, VictoryAxis } from 'victory';
import { Stats } from './types';

type Props = {
  stats: Stats[];
};

const ProfileStatsGraphs = ({ stats }: Props) => {
  const [total, setTotal] = React.useState(0);
  const graphData = stats.map(({ title, hits }) => {
    return { x: title, y: Number(hits) };
  });

  React.useEffect(() => {
    setTotal(() =>
      stats
        .map(({ hits }) => Number(hits))
        .reduce((last, curr) => last + curr, 0)
    );
  }, [stats]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Hits: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graphData}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#fff',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryAxis
            style={{
              axis: { stroke: 'white' },
              tickLabels: { fill: 'white' },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              axis: { stroke: 'white' },
              tickLabels: { fill: 'white' },
            }}
          />
          <VictoryBar
            alignment='start'
            data={graphData}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: '#fff',
                strokeWidth: 2,
              },
              labels: {
                fontSize: 14,
                fill: '#fff',
              },
            }}
          ></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default ProfileStatsGraphs;
