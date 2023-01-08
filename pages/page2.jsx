import React from "react";
const SaitoDevelopers = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Saito Developers</h1>
      </header>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Person 1</td>
            <td>Founder</td>
            <td>
              <a href="https://github.com/person1">GitHub</a>
            </td>
          </tr>
          <tr>
            <td>Person 2</td>
            <td>Founder</td>
            <td>
              <a href="https://github.com/person2">GitHub</a>
            </td>
          </tr>
          <tr>
            <td>Person 3</td>
            <td>Developer</td>
            <td>
              <a href="https://github.com/person3">GitHub</a>
            </td>
          </tr>
          <tr>
            <td>Person 4</td>
            <td>Developer</td>
            <td>
              <a href="https://github.com/person4">GitHub</a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <footer>
        <p>Copyright 2021 Saito Developers</p>
      </footer>
    </div>
  );
};

export default SaitoDevelopers;
