import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
const About = () => {
  const [loadTooltip, setLoadTooltip] = useState(false);

  useEffect(() => {
    setLoadTooltip(true);
  }, []);

  return (
    <section className="about" id="about">
      <p>
        Experienced Frontend Engineer, over 7+ years of experiance on the field.
        Specialized in{" "}
        <strong
          title="(Vanilla, Vue, React, ES6, jQuery)"
          data-tip
          data-for="JavaScript"
        >
          JavaScript / TypeScript
        </strong>
        {loadTooltip && (
          <ReactTooltip id="JavaScript" type="warning" effect="solid">
            <span>(React, Vue, Next, Nuxt, ES6, jQuery)</span>
          </ReactTooltip>
        )}
        ,{" "}
        <strong
          title="(Laravel, Codeigniter, WordPress)"
          data-tip
          data-for="PHP"
        >
          PHP
        </strong>
        ,
        {loadTooltip && (
          <ReactTooltip id="PHP" type="warning" effect="solid">
            <span>(Laravel, Codeigniter, WordPress)</span>
          </ReactTooltip>
        )}{" "}
        moderate understand on{" "}
        <strong title="(Express and Hapi)" data-tip data-for="Node">
          Node
        </strong>
        {loadTooltip && (
          <ReactTooltip id="Node" type="warning" effect="solid">
            <span>(Express and Hapi)</span>
          </ReactTooltip>
        )}{" "}
        for server-side scripting and API development as well as{" "}
        <strong title="(MySql, MariaDB, NoSQL)" data-tip data-for="database">
          Database Management
        </strong>{" "}
        and architecture.
        {loadTooltip && (
          <ReactTooltip id="database" type="warning" effect="solid">
            <span>(MySql, MariaDB, NoSQL)</span>
          </ReactTooltip>
        )}
      </p>
    </section>
  );
};
export default About;
