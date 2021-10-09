import React from "react";
import ReactTooltip from "react-tooltip";
const about = () => {
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
          JavaScript
        </strong>
        <ReactTooltip id="JavaScript" type="warning" effect="solid">
          <span>(Vanilla, Vue, React, Nuxt, Next, ES6, jQuery)</span>
        </ReactTooltip>
        ,{" "}
        <strong
          title="(Laravel, Codeigniter, WordPress)"
          data-tip
          data-for="PHP"
        >
          PHP
        </strong>
        ,
        <ReactTooltip id="PHP" type="warning" effect="solid">
          <span>(Laravel, Codeigniter, WordPress)</span>
        </ReactTooltip>{" "}
        moderate understand on{" "}
        <strong title="(Express and Hapi)" data-tip data-for="Node">
          Node
        </strong>
        <ReactTooltip id="Node" type="warning" effect="solid">
          <span>(Express and Hapi)</span>
        </ReactTooltip>{" "}
        for server-side scripting and API development as well as{" "}
        <strong title="(MySql, MariaDB)" data-tip data-for="Node">
          Database Management
        </strong>{" "}
        and architecture.
        <ReactTooltip id="Node" type="warning" effect="solid">
          <span>(MySql, MariaDB)</span>
        </ReactTooltip>
      </p>
    </section>
  );
};
export default about;
