import { appendFile, mkdir } from 'fs'
import { promisify } from 'util'

const createDirectory = promisify(mkdir)
const createFile = promisify(appendFile)

const createBlockFile = async (path: string, content: string): Promise<void> => {
  try {
    await createFile(path, content)
  } catch (error) {
    console.log(error)
  }
}

const createBlock = async (): Promise<void> => {
  const blocksDirectory: string = './src/blocks'
  const blockName: string = process.argv[2]
  const blockPath: string = `${blocksDirectory}/${blockName}`
  try {
    await createDirectory(blockPath)
    await createDirectory(`${blockPath}/img`)

    await createBlockFile(`${blockPath}/index.pug`, `mixin ${blockName}(data)\n\tblock`)
    await createBlockFile(`${blockPath}/index.scss`, `.${blockName} {}`)
    await createBlockFile(`${blockPath}/index.ts`, ``)
    await createBlockFile(`${blockPath}/data.json`, ``)

    console.log(`Блок ${blockName} успешно создан.`)
  } catch (error) {
    console.log(error)
  }
}

createBlock()
