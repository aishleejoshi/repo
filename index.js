import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git"
const path="./data.json";
const date=moment().format();
const data={
    date:date,
};
jsonfile.writeFile(path,data);
const git = simpleGit();

await git.add([path]);
await git.commit(date, { "--date": date });
await git.push();
