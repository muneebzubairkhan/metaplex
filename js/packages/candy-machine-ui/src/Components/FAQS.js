import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQS() {
  return (
    <div className="container-fluid">
      <div className="container p-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row text-green">
              <h1 className="section__heading">Frequently Asked Questions</h1>
            </div>
            <div className="row mt-5">
              {/* a1 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Is there a Discord?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, but the Moonbirds channels are NFT-gated (you must hold
                    a Moonbird to enter) inside the PROOF Discord. Once inside,
                    you will have access to private Moonbirds channels that will
                    include information on nesting, community events, upcoming
                    drops, and more. PROOF Collective Members will also have
                    access to this channel, creating the opportunity for the two
                    communities to hang out.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/*a2  */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Is there a guaranteed mint allowlist?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* a3 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>
                    What if some winners on the guaranteed mint allowlist do not
                    mint?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We will randomly select more winners from the raffle and
                    notify them via
                    https://www.premint.xyz/moonbirds-allowlist-raffle/verify.
                    To ensure that your email is registered in PREMINT, go to
                    https://premint.xyz/profile and enter your email. For added
                    security, you may choose to add an Anti-Phishing Code to
                    guarantee the email you get comes from PREMINT.s
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* a4 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography>
                    What are the maximum mints per wallet?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* a5 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <Typography>
                    What time can guaranteed mint allowlist winners mint?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* a6 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6a-content"
                  id="panel6a-header"
                >
                  <Typography>
                    How are the 10,000 Moonbirds distributed?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* a7 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7a-content"
                  id="panel7a-header"
                >
                  <Typography>
                    How are the 10,000 Moonbirds distributed?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}