import * as React from 'react';
import { MatrixTitle, ColorSpan, TableContainer, TableTh } from 'components/ModalMatrix/styled';
import { Table, ColorTr, BoldTd } from 'components/HelpInfo/ModalCriticality/styled';
import ThemeDashboardCardBlock from '@next/ui/atoms/ThemeDashboardCardBlock';

const Criticality = () => {
  return (
    <ThemeDashboardCardBlock>
      <MatrixTitle>Матрица учета <ColorSpan colorText="#94344b">критичных</ColorSpan> нарушений</MatrixTitle>
      <TableContainer maxHeight="100%" noMedia >
        <Table>
          <thead>
            <tr>
              <TableTh>Объект</TableTh>
              <TableTh>Элемент</TableTh>
              <TableTh><ColorSpan colorText="#94344b">Критичные нарушения</ColorSpan></TableTh>
              <TableTh><ColorSpan colorText="#de9d44">Некритичные нарушения</ColorSpan></TableTh>
            </tr>
          </thead>

          <tbody>
            <ColorTr>
              <BoldTd rowSpan={8}>Двор</BoldTd>
              <td>Входные группы</td>
              <td>
                Не очищены твердое покрытие и ступеньки от снега и наледи, не обеспечен свободный и безопасный проход пешеходов
                (в т.ч. маломобильных групп граждан). Глубокий снег (более 5 см), гололед, снежные накаты.
              </td>
              <td>
                Твердое покрытие и ступеньки не очищены от снега и наледи на всю ширину, при этом обеспечен свободный и безопасный
                проход пешеходов (в т.ч. маломобильных групп граждан)
              </td>
            </ColorTr>

            <ColorTr>
              <td>Тротуары</td>
              <td>
                Тротуар не очищен от снега и наледи, не обеспечен свободный и безопасный проход пешеходов (в т.ч. маломобильных групп
                граждан). Глубокий снег (более 5 см), гололед, снежные накаты.
              </td>
              <td>
                Тротуар очищен не на всю ширину / частично, при этом обеспечен свободный и безопасный проход пешеходов
                (в т.ч. маломобильных групп граждан)
              </td>
            </ColorTr>

            <ColorTr>
              <td>Проезды на ДТ</td>
              <td>
                Не выполнено прометание проезда и противогололедная обработка. Не обеспечен свободный и безопасный проезд
                транспорта (спецтранспорта, санитарного транспорта) и проход пешеходов. «Колея на проезжей части» из-за
                неубранного снега, гололед, снежные накаты.
              </td>
              <td>
                Прометание и противогололедная обработка выполнены не на всю ширину дворового проезда, при этом обеспечен
                свободный и безопасный проезд транспорта и проход пешеходов. Не очищена лотковая часть от снега и наледи
              </td>
            </ColorTr>

            <ColorTr>
              <td>Площадка детская</td>
              <td>
                Площадка не расчищена от рыхлого снега и наледи (до состояния уплотненного слоя снега), не обеспечена
                безопасная эксплуатация площадки. Затруднено использование площадки по назначению.
              </td>
              <td>
                Площадка очищена от рыхлого снега не по всей площади. Наличие снежных куч на площадке, при этом обеспечена
                безопасная эксплуатация, и возможно использование оборудования по назначению.
              </td>
            </ColorTr>

            <ColorTr>
              <td>Внутридворовая дорожно-тропиночная сеть</td>
              <td>
                Пространство не очищено от снега и наледи, не обеспечен свободный и безопасный проход пешеходов.
              </td>
              <td>
                Пространство очищено не на всю ширину / частично, при этом обеспечен свободный и безопасный проход пешеходов.
              </td>
            </ColorTr>

            <ColorTr>
              <td>Площадка спортивная</td>
              <td>
                Ледовое покрытие не очищено от снега, эксплуатация катка затруднена. Затруднено использование площадки по назначению.
              </td>
              <td>
                Площадка очищена от рыхлого снега не по всей площади. Наличие локальных снежных куч на территории катка (площадки),
                при этом обеспечена эксплуатация катка (площадки).
              </td>
            </ColorTr>

            <ColorTr>
              <td>Парковки</td>
              <td>
                Парковочное пространство не очищено от снега и наледи, эксплуатация парковочного места затруднена.
              </td>
              <td>
                Парковочное пространство очищено от снега частично, при этом эксплуатация парковочного места не затруднена.
              </td>
            </ColorTr>

            <ColorTr>
              <td>Площадки отдыха</td>
              <td>
                Площадка не очищена от снега и наледи, не обеспечен безопасный проход пешеходов.
              </td>
              <td>
                Наличие снежных куч на площадке, безопасный проход обеспечен.
              </td>
            </ColorTr>

            <tr>
              <BoldTd rowSpan={5}>Дорога</BoldTd>
              <td>Проезжая часть</td>
              <td>
                Не выполнено прометание проезжей части и противогололедная обработка. Не обеспечен свободный
                и безопасный проезд транспорта. «Колея на проезжей части» из-за неубранного снега, гололед, снежные накаты.
              </td>
              <td>
                Прометание и противогололедная обработка выполнены не на всю ширину проезжей части, при этом обеспечен свободный
                и безопасный проезд транспорта. Снег складирован в лотковой части.
              </td>
            </tr>

            <tr>
              <td>Тротуары</td>
              <td>
                Тротуар не очищен от снега и наледи, не обеспечен свободный и безопасный проход пешеходов (в т.ч. маломобильных
                групп граждан). Глубокий снег (более 5 см), гололед, снежные накаты.
              </td>
              <td>
                Тротуар очищен не на всю ширину / частично, при этом обеспечен свободный и безопасный проход пешеходов (в т.ч.
                маломобильных групп граждан)
              </td>
            </tr>

            <tr>
              <td>Пешеходные переходы (в т.ч. подходы)</td>
              <td>
                Пешеходный переход не очищен от снега и наледи, не обеспечен свободный и безопасный проход пешеходов, в т.ч.
                маломобильных групп граждан. Глубокий снег (более 5 см), гололед, снежные накаты.
              </td>
              <td>
                Пешеходный переход очищен от снега и наледи частично, при этом обеспечен свободный и безопасный проход пешеходов,
                в т.ч. маломобильных групп граждан.
              </td>
            </tr>

            <tr>
              <td>Остановки и места подъезда и отъезда НГПТ</td>
              <td>
                Сформированный снежный вал не раздвинут из зоны ООТ, препятствует подъезду общественного транспорта и посадке-высадке
                пассажиров. Посадочная площадка не очищена от снега и наледи.
              </td>
              <td>
                Подъезд и ООТ очищены от снега и наледи (раздвинуты снежные валы в зоне остановки), имеются остатки (кучи) снега на
                посадочной площадке, при этом обеспечен безопасный подъезд транспорта и посадка-высадка пассажиров.
              </td>
            </tr>

            <tr>
              <td>Парковки</td>
              <td>
                Парковочное пространство не очищено от снега и наледи, эксплуатация парковочного места затруднена.
              </td>
              <td>
                Парковочное пространство очищено от снега и наледи частично, при этом эксплуатация парковочного места не затруднена.
              </td>
            </tr>

            <ColorTr>
              <BoldTd colSpan={2}>Формирование валов и снежных куч на ОДХ</BoldTd>
              <td>
                Невывезенный снег мешает движению транспорта и пешеходов (заужение полосы движения транспорта на 2 метра  и более из-за
                несформированного вала), наличие снежных куч ухудшает видимость при движении.
              </td>
              <td>
                Не вывезена куча (вал) снега, при этом препятствий для безопасного движения транспорта и пешеходов нет.
                Ширина вала снега 1,5 м и менее.
              </td>
            </ColorTr>

            <tr>
              <BoldTd rowSpan={3}>Вывоз снега с ОДХ</BoldTd>
              <td>1, 2, 4, 6, 7а, 7б категорий, а также внекатегорийные объекты</td>
              <td rowSpan={3}>
                Невывезенный снег мешает движению транспорта и пешеходов (заужение полосы движения транспорта на 2 метра и более из-за
                несформированного вала), наличие снежных куч ухудшает видимость при движении.
              </td>
              <td rowSpan={3}>
                Не вывезена куча  (вал) снега, при этом препятствий для безопасного движения транспорта и пешеходов нет.
                Ширина вала снега 1,5 м и менее.
              </td>
            </tr>

            <tr>
              <td>3 категории</td>
            </tr>

            <tr>
              <td>5 категории</td>
            </tr>

            <ColorTr>
              <BoldTd colSpan={2}>Уборка ТПУ</BoldTd>
              <td>
                Пространство ТПУ не очищено от снега и наледи, создает препятствие для безопасного
                прохода пешеходов и движения транспорта.
              </td>
              <td>
                Пространство ТПУ очищено от снега и наледи не по всей площади. При этом наличие неубранных участков не
                создает препятствие для безопасного прохода пешеходов и движения транспорта.
              </td>
            </ColorTr>

            <tr>
              <BoldTd colSpan={2}>Вывоз снега с ТПУ</BoldTd>
              <td>
                Не вывезены кучи (валы) снега с пространства ТПУ, создает препятствие для безопасного прохода
                пешеходов и движения транспорта.
              </td>
              <td>
                Имеются невывезенные снежные кучи (валы), при этом не  создается препятствий для безопасного
                прохода пешеходов и движения транспорта.
              </td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </ThemeDashboardCardBlock>
  );
};

export default Criticality;