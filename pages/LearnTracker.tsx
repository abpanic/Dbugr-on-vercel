import React, {ReactNode} from "react";
import ContainerBlock from "../components/ContainerBlock";
import Link from "next/link";


export default function blog() {
  return (
    <ContainerBlock title="Blog - Abhilash Panicker">
    <Link
          href="https://jakevdp.github.io/WhirlwindTourOfPython/"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          WhirlwindTour of Python
      </Link>
      
      https://github.com/jakevdp/WhirlwindTourOfPython
      <Link
          href="https://jakevdp.github.io/PythonDataScienceHandbook/"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          DataScienceHandbook
      </Link> 

      
      https://github.com/jakevdp/PythonDataScienceHandbook/tree/master/notebooks
      
    </ContainerBlock>
  );
}
