type Output = {
  type: string;
  msg: JSX.Element;
};

export default function commandMaker(command: string): Output {
  let result: Output;
  const typedCommand = (
    <p className='text-green-300 font-mono'>
      sankalpa@sankalpa:<span className='text-indigo-500'>~</span>
      <span className="text-white"> {command}</span>
    </p>
  );
  switch (command) {
    case "":
      result = {
        type: "normal",
        msg: (
          typedCommand
        ),
      };
      break;

    case "ls":
      result = {
        type: 'pre',
        msg: (
          <div>
            {typedCommand}
            <pre style={{ color: 'orange', fontFamily: 'monospace' }}>
              {`
                .-.
                (o.o)
                 |=|
                __|__
              //.=|=.\\
             // .=|=. \\
             \\ .=|=. //
              \\(_=_)//
               (:| |:)
                || ||
                () ()
                || ||
                || ||
           l42 ==' '==
              `}
            </pre>
          </div>
        ),
      };
      break;
    case "whoami":
      result = {
        type: 'pre',
        msg: (
          <h1>
            {typedCommand}
            <pre style={{ color: '#EE7214', fontFamily: 'monospace' }}>
              {
                `
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀
                ⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀⠀⡏⠀⠀⠀⠀⠀⢷
                ⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀ ⡇
                ⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸⠀Hi👋⠀ ⡇
                ⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⢹⠀⠀⠀⠀⠀ ⡇
                ⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⡼
                ⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⠞⠀
                ⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀
                ⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀
                ⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⠀⣄⢸⠀⠀⠀⠀⠀⠀
                ⣿⣿⣧⣀⣿………⣀⣰⣏⣘⣆⣀⠀⠀⠀⠀                                    
              `
              }
            </pre>
            <pre style={{ color: '#5FBDFF', fontFamily: 'monospace', marginTop: "-15px" }}>
              {
                `
                I'm Sankalpa Acharya, Computer Science And Engineering Student.
                I Love Developing Website, 
                Working With Web Security, Solving Coding Challenges..                                   
              `
              }
              --I need <span className="line-through">Peace</span> Internship👨🏻‍💼.
            </pre>
          </h1>
        )
      }
      break

    case "projects":
      result = {
        type: 'pre',
        msg: (
          <div>
            {typedCommand}
            <div className="mb-2">
              <p>
                👉 YCMC(<a href="https://ycmc.sankalpa.info.np/" className="text-indigo-500 underline">You Copied My Code</a>)
              </p>
              <p>Code Similarity Checker, Checks Code Similarity Between 2 Github Repository.</p>
            </div>
            <div className="mb-2">
              <p>
                👉 Karya(<a href="https://github.com/sankalpa-acharya/karya" className="text-indigo-500 underline">kanban Framework</a>)
              </p>
              <p>kanban Framework where you can add cards, set status, create projects, invite members.</p>
            </div>
            <div className="mb-2">
              <p>
                👉 notBrowser(<a href="https://github.com/sankalpa-acharya/notBrowser" className="text-indigo-500 underline">Cors Proxy</a>)
              </p>
              <p>Solves CORS problem by acting as an intermediary between users and external websites.</p>
            </div>
            <div className="mb-2">
              <p>
                👉 Remanings(<a href="https://sankalpa.info.np/project" className="text-indigo-500 underline">Other</a>)
              </p>
              <p>Other Projects.</p>
            </div>
          </div>
        )
      }
      break
    case "help":
      result = {
        type:"pre",
        msg:(
          <>
          {typedCommand}
          <p>Commands that works</p>
          <p>💡-help </p>
          <p>💡-whoami </p>
          <p>💡-projects </p>
          <p>💡-contact</p>
          <p>💡-ls</p>

          </>
        )

      }
      break
    default:
      result = {
        type: 'pre',
        msg: (
          <pre>
            {typedCommand}
            '{command}' command not found
          </pre>
        ),
      };
      break;
  }

  return result;
}
