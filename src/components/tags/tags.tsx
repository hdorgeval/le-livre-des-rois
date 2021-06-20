import { Tag } from './tag';
import { AllMarkdownRemarkResponse, MarkdownGroupedTag } from '../../graphql';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fuse from 'fuse.js';

export const Tags: React.FC = () => {
  const allData = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const allTags: MarkdownGroupedTag[] = React.useMemo(() => {
    return allData?.allMarkdownRemark?.group || [];
  }, [allData]);

  const fuzzySearch = React.useMemo(() => {
    const options = {
      includeScore: true,
      findAllMatches: true,
      threshold: 0.6,
      keys: ['fieldValue'],
    };
    const search = new Fuse<MarkdownGroupedTag>(allTags, options);
    return search;
  }, [allTags]);

  const [tags, setTags] = React.useState<MarkdownGroupedTag[]>(allTags);
  const onSearch: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (event) => {
      const searchValue = event.target.value;
      if (!searchValue) {
        setTags(allTags);
        return;
      }
      if (searchValue && searchValue.length === 1) {
        setTags(
          allTags.filter((tag) =>
            tag.fieldValue.toLowerCase().startsWith(searchValue.toLowerCase()),
          ),
        );
        return;
      }
      const fuzzyResult = fuzzySearch.search(searchValue);
      const result = fuzzyResult.filter((r) => Number(r.score) <= 0.3).map((r) => r.item);
      setTags(result);
    },
    [setTags, allTags, fuzzySearch],
  );

  return (
    <>
      <div className="bg-dark text-light input-group mx-auto sticky-top w-75 mb-3">
        <span className="bg-dark input-group-text" id="search-input">
          <i className="bi bi-search text-light"></i>
        </span>
        <input
          type="text"
          className="form-control bg-dark text-light"
          placeholder="Rechercher un mot dans le lexique"
          aria-label="Rechercher un mot dans le lexique"
          aria-describedby="search-input"
          onChange={onSearch}
        />
      </div>
      <div id="tags-container" className="container-fluid">
        {tags
          .sort((a, b) =>
            a.fieldValue.replace('â', 'a').toLowerCase() >=
            b.fieldValue.replace('â', 'a').toLowerCase()
              ? 1
              : -1,
          )
          .map((group, index) => {
            return (
              <Tag
                index={index}
                key={group.fieldValue}
                size={group.totalCount}
                text={group.fieldValue}
              />
            );
          })}
      </div>
    </>
  );
};
