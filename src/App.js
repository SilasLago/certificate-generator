import { useEffect, useState } from 'react';
import './App.css';
import Excel from "exceljs"
import PptxGenJS from 'pptxgenjs';
import { getCurNorma, convertDate } from './Utils/functions';

function App() {

  const [file, setFile] = useState(null)
  const [allCertificates, setAllCertificates] = useState([])

  useEffect(() => {
    if(file !== null) {
      readXLSX()
    }
  }, [file])

  useEffect(() => {
    if(allCertificates.length > 0) {
      createCertificates(allCertificates)
      setAllCertificates([])
      setFile(null)
    }
  }, [allCertificates])

  const createCertificates = (allCertificates) => {
    let pres = new PptxGenJS()

    let baseConfig = {
      align: 'center',
      w: '100%',
      x: '0%',
    }

    allCertificates.forEach((curCertificate) => {
      let slide = pres.addSlide()
      let textBoxGrupoMayer = `O Grupo Mayer certifica,`
      let textBoxGrupoMayerConfig = { 
        ...baseConfig,
        y: '15%', 
        color: '000000', 
        fontSize: 16, 
        fontFace: 'Arial Black',
      }
      let textBoxUserName = `${curCertificate.nome}`
      let textBoxUserNameConfig = { 
        ...baseConfig,
        y: '25%',
        color: '000000', 
        fontSize: 24,
        bold: true,
        fontFace: 'Arial Black',
      }
      let textBoxConcluded = `que concluiu com satisfação o`
      let textBoxConcludedConfig = { 
        ...baseConfig,
        y: '35%', 
        color: '000000', 
        fontSize: 14,
        fontFace: 'Liberation Sans',
      }
      let textBoxCourseName = `Curso de Treinamento de Brigada de Incêndio`
      let textBoxCourseNameConfig = { 
        ...baseConfig,
        y: '45%', 
        color: '000000', 
        fontSize: 18,
        bold: true,
        fontFace: 'Arial Black',
      }
      let textBoxNorma = `cumprindo conforme o conteúdo previsto na norma ${getCurNorma(curCertificate.estado)} com carga horária de 4 horas.`
      let textBoxNormaConfig = { 
        ...baseConfig,
        y: '55%', 
        color: '000000', 
        fontSize: 12,
        fontFace: 'Liberation Sans', 
      }
      let textBoxDate = `Certificado emitido em: ${convertDate(new Date(curCertificate.data))}`
      let textBoxDateConfig = { 
        ...baseConfig,
        y: '65%', 
        color: '000000', 
        fontSize: 12,
        fontFace: 'Liberation Sans', 
      }
      let textBoxFooter = `Validade de um ano a partir da data de emissão desse certificado.`
      let textBoxFooterConfig = { 
        ...baseConfig,
        y: '75%', 
        color: '000000', 
        fontSize: 12,
        fontFace: 'Liberation Sans', 
      }
      slide.addImage({ 
        path: 'resources/certificado-bg.png', 
        w: '100%',
        h: '100%',
      })
      slide.addText(textBoxGrupoMayer, textBoxGrupoMayerConfig)
      slide.addText(textBoxUserName, textBoxUserNameConfig)
      slide.addText(textBoxCourseName, textBoxCourseNameConfig)
      slide.addText(textBoxConcluded, textBoxConcludedConfig)
      slide.addText(textBoxNorma, textBoxNormaConfig)
      slide.addText(textBoxDate, textBoxDateConfig)
      slide.addText(textBoxFooter, textBoxFooterConfig)
    })
    pres.writeFile(`Certificados-${new Date().toLocaleDateString()}`)
  }

  const readXLSX = async () => {
    const certificates = []
    const workbook = new Excel.Workbook()
    await workbook.xlsx.load(file)
    workbook.eachSheet((worksheet) => {
      let attributes = []
      worksheet.eachRow((row, rowId) => {
        if(rowId === 1) {
          row.eachCell((cell) => {
            attributes.push(
              (typeof(cell.value) === 'object' ? cell.value.text : cell.value).toLowerCase()
            )
          })
        } else {
          let curCertificate = rowId - 2
          certificates.push({})
          certificates[curCertificate].id = rowId
          row.eachCell((cell, cellId) => {
            let curAttribute = cellId - 1
            certificates[curCertificate][attributes[curAttribute]] = cell.value
          })
        }
      })
    });
    setAllCertificates(certificates)
  }

  return (
    <section className='centered'>
      <h1 className='title'>Gerador de certificados</h1>
      <div className='centered container'>
        <label className='label'>Selecione o arquivo XLSX:</label>
        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
      </div>
    </section>
  );
}

export default App;
