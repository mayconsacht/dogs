import React from 'react';
import styles from './ProfileStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

type Props = {
  stats: Stats[];
};

const ProfileStatsGraphs = ({ stats }: Props) => {
  const [graph, setGrafh] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const graphData = stats.map(({ title, acessos }) => {
    return { x: title, y: Number(acessos) };
  });

  React.useEffect(() => {
    setTotal(() =>
      stats
        .map(({ acessos }) => Number(acessos))
        .reduce((last, curr) => last + curr, 0)
    );
  }, [stats]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
      <div>
        <VictoryPie data={graphData} />
      </div>
    </section>
  );
};

export default ProfileStatsGraphs;
