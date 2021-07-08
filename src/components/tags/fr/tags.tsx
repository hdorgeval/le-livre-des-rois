import { Tag } from '../common/tag';
import { AllMarkdownRemarkResponse, MarkdownGroupedTag } from '../../../graphql';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const isFuzzyMatch = (word: string, search: string): boolean => {
  if (word && word.includes(search)) {
    return true;
  }
  const searchletters = [...search].map((l) => l.toLowerCase());
  const wordLetters = [...word].map((l) => l.toLowerCase().replace('â', 'a'));
  let matchingLetters = 0;

  searchletters.forEach((letter, letterIndexInSearch) => {
    const letterIndexInWord = wordLetters.indexOf(letter);
    if (letterIndexInWord < 0) {
      return;
    }
    const distance = Math.abs(letterIndexInWord - letterIndexInSearch);
    const isInRange = distance <= wordLetters.length / 2;
    if (isInRange) {
      matchingLetters += 1;
    }
  });

  const ratio = matchingLetters / searchletters.length;
  if (ratio > 0.8) {
    return true;
  }
  return false;
};

const fuzzySearch = (searchValue: string, tags: MarkdownGroupedTag[]): MarkdownGroupedTag[] => {
  if (!searchValue) {
    return tags;
  }

  if (searchValue.length === 1) {
    return tags.filter((tag) =>
      tag.fieldValue.toLowerCase().replace('â', 'a').startsWith(searchValue.toLowerCase()),
    );
  }

  if (searchValue.length === 2) {
    return tags.filter((tag) => tag.fieldValue.toLowerCase().includes(searchValue.toLowerCase()));
  }

  const result = tags.filter((tag) => {
    return isFuzzyMatch(tag.fieldValue, searchValue);
  });
  return result;
};

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

  const [tags, setTags] = React.useState<MarkdownGroupedTag[]>(allTags);
  const [isSearching, setIsSearching] = React.useState(false);
  const inputSearchRef: React.LegacyRef<HTMLInputElement> = React.useRef(null);

  const onSearch: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (event) => {
      const searchValue = event.target.value;
      if (searchValue) {
        setIsSearching(true);
      }
      const result = fuzzySearch(searchValue, allTags);
      setTags(result);
    },
    [setTags, allTags],
  );

  const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = React.useCallback(
    (event) => {
      if (event.key === 'Enter' && inputSearchRef && inputSearchRef.current) {
        inputSearchRef.current.blur();
      }
    },
    [inputSearchRef],
  );

  const resetSearch = React.useCallback(() => {
    setIsSearching(false);
    if (inputSearchRef && inputSearchRef.current) {
      inputSearchRef.current.value = '';
      setTags(allTags);
    }
  }, [allTags]);

  return (
    <>
      <div className="bg-dark text-light input-group mx-auto sticky-top mb-3">
        <span className="bg-dark input-group-text" id="search-input">
          <i className="bi bi-search text-light"></i>
        </span>
        <input
          ref={inputSearchRef}
          type="text"
          className="form-control bg-dark text-light"
          placeholder="Recherchez un mot dans le lexique"
          aria-label="Recherchez un mot dans le lexique"
          aria-describedby="search-input"
          onChange={onSearch}
          onKeyPress={onKeyPress}
        />
        {isSearching && (
          <button
            className="btn btn-outline-secondary py-0 px-1"
            type="button"
            id="reset-search"
            onClick={resetSearch}
          >
            <i className="bi bi-x text-light fs-2"></i>
          </button>
        )}
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
                lang="fr"
                key={group.fieldValue}
                size={group.totalCount}
                text={group.fieldValue}
                description={`Voir tous les articles liés à ${group.fieldValue}`}
              />
            );
          })}
      </div>
    </>
  );
};
