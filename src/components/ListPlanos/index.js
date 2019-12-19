import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdCheckmark } from 'react-icons/io';
import { MdDevices } from 'react-icons/md';
import {
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
  AiOutlineClockCircle,
  AiOutlineLineChart,
} from 'react-icons/ai';

// import { Container } from './styles';

export default function ListPlanos({ data }) {
  return (
    <div key={data.id} className="card-plan-2 card-plan-2__white">
      <div className="card-plan-2__text">
        {!data.plano ? (
          <span>{data.dedicado}</span>
        ) : (
          <>
            <h1>{data.plano}</h1>
            <span>MEGA</span>
          </>
        )}
      </div>

      <ul>
        <li>
          <AiOutlineCloudDownload color="#fff" size={26} />
          <span>{data.download} MB download</span>
        </li>

        <li>
          <AiOutlineCloudUpload color="#fff" size={26} />
          <span>{data.upload} MB upload</span>
        </li>

        <li>
          <IoMdCheckmark color="#fff" size={26} />
          <span>{data.feature1}</span>
        </li>

        <li>
          <AiOutlineClockCircle color="#fff" size={26} />
          <span>{data.feature2}</span>
        </li>

        <li>
          <MdDevices color="#fff" size={26} />
          <span>{data.feature3}</span>
        </li>

        <li>
          <AiOutlineLineChart color="#fff" size={26} />
          <span>{data.feature4}</span>
        </li>

        <Link
          to={
            data.tipo === 'residencial'
              ? '/assinatura'
              : '/assinatura-empresarial'
          }
          className="plan__btnBox btn-white mt-small"
        >
          <span>Assinar</span>
        </Link>
      </ul>
    </div>
  );
}
