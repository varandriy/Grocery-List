import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  deleteEntry,
  addEntry,
  fetchEntries,
  doneEntry,
  setEntryPriority,
  sortByEntryPriority,
} from './redux/actions/entriesActions';
import { Input, Button } from 'antd';

const Styled = styled.div`
  .delete-button {
    margin-left: 10px;
  }
  .add-item-input {
    width: 300px;
  }
`;

const Component = ({ entries, deleteEntry, addEntry, fetchEntries, doneEntry, setEntryPriority, sortByEntryPriority }) => {
  const [entryText, setEntryText] = React.useState('');

  React.useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <Styled>
      <Input
        className={'add-item-input'}
        value={entryText}
        onChange={(e) => setEntryText(e.target.value)}
      />
      <Button
        onClick={() => {
          entryText && addEntry(entryText);
          setEntryText('');
          sortByEntryPriority();
        }}
      >
        Add
      </Button>

      {entries.map((entry) => {
        return (
          <div className={'ant-row'} key={entry.id}>
            <div>
              <div>{entry.text}</div>
            </div>
            <div>
              <select
                value={entries.priority}
                onChange={(e) => {
                  setEntryPriority({ id: entry.id, priority: e.target.value });
                  sortByEntryPriority();
                }}
              >
                {
                  [1, 2, 3, 4, 5].map(value => {
                    return <option key={value} value={value}>{value}</option>;
                  })
                }
              </select>
            </div>

            <Button
              onClick={() => deleteEntry(entry.id)}
              className={'delete-button'}>Delete entry
            </Button>

            <Button onClick={() => {
              doneEntry({ id: entry.id, isDone: !entry.isDone });
            }}>
              {entry.isDone ? 'Have' : 'Run out'}
            </Button>

            <div>{entry.time}</div>
          </div>
        );
      })}
    </Styled>
  );
};

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
  };
};

const mapDispatchToProps = { deleteEntry, addEntry, fetchEntries, doneEntry, setEntryPriority, sortByEntryPriority };

export const EntriesList = connect(mapStateToProps, mapDispatchToProps)(Component);
