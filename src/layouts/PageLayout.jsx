import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { BuilderComponent } from '@builder.io/react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../components/Link/Link';
import '../builder-settings';
import theme from '../theme';

const useStyles = makeStyles(them => ({
  root: {
    padding: theme.spacing(1)
  },
  header: {},
  footer: {},
  content: {}
}));

const query = graphql`
  query {
    allBuilderModels {
      header(limit: 1, options: { cachebust: true }) {
        content
      }
      footer(limit: 1, options: { cachebust: true }) {
        content
      }
    }
  }
`;

function PageLayout({ children }) {
  const classes = useStyles();
  return (
    <StaticQuery query={query}>
      {data => {
        const models = data.allBuilderModels;
        return (
          <div className={classes.root}>

            <div className={classes.content}>{children}</div>

          </div>
        );
      }}
    </StaticQuery>
  );
}

export default PageLayout;
