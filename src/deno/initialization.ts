import { Input, prompt } from 'prompt/mod.ts';
import { copySync } from 'std/fs/mod.ts';
import { dirname } from 'https://deno.land/x/dirname_es@v1.0.1/mod.ts';
import { join } from 'std/path/mod.ts';

const min_initialization = async () => {
  const { project_name } = await prompt([
    {
      name: 'project_name',
      message: 'project_name:',
      default: 'deno_pjx',
      type: Input,
    },
  ]);
  try {
    copySync(
      join(dirname(import.meta), '../../assets/min_initialization'),
      `./${project_name}`,
    );
    console.log('%cFinish...', 'color:green');
  } catch (err) {
    console.log(`%Fail,reason:\n${err}`, 'color:red');
  }
};

export { min_initialization };
