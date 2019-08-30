import React, { Component } from 'react';
import { Link } from 'next/link';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: 2,
          name: 'PHP',
          score: '30.37'
        },
        {
          id: 1,
          name: 'JavaScript',
          score: '30.21'
        },
        {
          id: 3,
          name: 'Database',
          score: '13.45'
        },
        {
          id: 4,
          name: 'API Development',
          score: '17.39'
        },
        {
          id: 5,
          name: 'JSON',
          score: '7.269'
        },
        {
          id: 6,
          name: 'Other',
          score: '1.32'
        }
      ]
    };
  }
  render() {
    return (
      <section>
        <h5>
          <span className="hash-tag">#</span> Skills:
        </h5>
        <ul>
          {this.state.skills.map(skill => (
            <li key={skill.id}>
              {skill.name} ({skill.score}%)
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
